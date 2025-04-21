/*
 *
 * Login actions
 *
 */

import { toast } from 'react-toastify'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import {
  LOGIN_CHANGE,
  LOGIN_RESET,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
  SET_LOGIN_SUBMITTING
} from './constants';
import { setAuth, clearAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from '../../utils/error';
import { clearCart } from '../Cart/actions';
import { clearAccount } from '../Account/actions';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

// Initialize useNavigate for navigation
const navigate = useNavigate();

export const loginChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: LOGIN_CHANGE,
    payload: formData
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    const rules = {
      email: 'required|email',
      password: 'required|min:6'
    };

    const user = getState().login.loginFormData;

    const { isValid, errors } = allFieldsValidation(user, rules, {
      'required.email': 'Email is required.',
      'email.email': 'Email format is invalid.',
      'required.password': 'Password is required.',
      'min.password': 'Password must be at least 6 characters.'
    });

    if (!isValid) {
      return dispatch({ type: SET_LOGIN_FORM_ERRORS, payload: errors });
    }

    dispatch({ type: SET_LOGIN_SUBMITTING, payload: true });
    dispatch({ type: SET_LOGIN_LOADING, payload: true });

    try {
      const response = await axios.post(`${API_URL}/auth/login`, user);

      const firstName = response.data.user.firstName;

      const successfulOptions = {
        title: `Hey${firstName ? ` ${firstName}` : ''}, Welcome Back!`,
        position: 'top-right', // Customize position
        autoDismiss: 1
      };

      localStorage.setItem('token', response.data.token);

      setToken(response.data.token);

      dispatch(setAuth());
      toast.success(successfulOptions.title, {
        position: successfulOptions.position,
        autoClose: 2000
      });

      dispatch({ type: LOGIN_RESET });
      navigate('/dashboard'); // Navigate to the dashboard or appropriate page

    } catch (error) {
      const title = `Please try to login again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_LOGIN_SUBMITTING, payload: false });
      dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    const successfulOptions = {
      title: `You have signed out!`,
      position: 'top-right', // Customize position
      autoDismiss: 1
    };

    dispatch(clearAuth());
    dispatch(clearAccount());
    localStorage.removeItem('token');

    toast.success(successfulOptions.title, {
      position: successfulOptions.position,
      autoClose: 2000
    });

    // Navigate to login page after signing out
    navigate('/login');
  };
};
