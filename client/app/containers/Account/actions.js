/*
 *
 * Account actions
 *
 */

import { toast } from 'react-toastify'; 
import axios from 'axios';

import {
  ACCOUNT_CHANGE,
  FETCH_PROFILE,
  CLEAR_ACCOUNT,
  SET_PROFILE_LOADING
} from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

export const accountChange = (name, value) => {
  return {
    type: ACCOUNT_CHANGE,
    payload: { [name]: value }
  };
};

export const clearAccount = () => {
  return {
    type: CLEAR_ACCOUNT
  };
};

export const setProfileLoading = (value) => {
  return {
    type: SET_PROFILE_LOADING,
    payload: value
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      dispatch(setProfileLoading(true));
      const response = await axios.get(`${API_URL}/user/me`);
      dispatch({ type: FETCH_PROFILE, payload: response.data.user });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const updateProfile = () => {
  return async (dispatch, getState) => {
    const profile = getState().account.user;

    try {
      const response = await axios.put(`${API_URL}/user`, { profile });

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000
      });

      dispatch({ type: FETCH_PROFILE, payload: response.data.user });

      // If navigation is needed, handle it in the component using useNavigate()
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
