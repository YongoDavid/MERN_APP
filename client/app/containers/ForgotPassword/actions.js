/*
 *
 * ForgotPassword actions
 *
 */

import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate from react-router-dom
import { toast } from 'react-toastify';  // Replaced react-notification-system-redux with react-toastify
import axios from 'axios';

import {
  FORGOT_PASSWORD_CHANGE,
  FORGOT_PASSWORD_RESET,
  SET_FORGOT_PASSWORD_FORM_ERRORS
} from './constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const forgotPasswordChange = (name, value) => {
  return {
    type: FORGOT_PASSWORD_CHANGE,
    payload: value
  };
};

export const forgotPassword = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        email: 'required|email'
      };

      const user = getState().forgotPassword.forgotFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.email': 'Email is required.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_FORGOT_PASSWORD_FORM_ERRORS,
          payload: errors
        });
      }

      const response = await axios.post(`${API_URL}/auth/forgot`, user);
      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'top-right',  // You can adjust the position and other settings based on the toast configuration
        autoDismiss: 1
      };

      if (response.data.success === true) {
        const navigate = useNavigate();  // Use useNavigate instead of useHistory
        navigate('/login');  // Navigation after successful password reset
      }

      // Replaced success with toast from react-toastify
      toast.success(response.data.message, successfulOptions);

      dispatch({ type: FORGOT_PASSWORD_RESET });
    } catch (error) {
      const title = `Please try again!`;
      handleError(error, dispatch, title);
    }
  };
};
