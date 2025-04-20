/*
 *
 * Address actions
 *
 */

import { toast } from 'react-toastify';
import axios from 'axios';

import {
  FETCH_ADDRESS,
  FETCH_ADDRESSES,
  ADDRESS_CHANGE,
  ADDRESS_EDIT_CHANGE,
  SET_ADDRESS_FORM_ERRORS,
  SET_ADDRESS_FORM_EDIT_ERRORS,
  RESET_ADDRESS,
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  SET_ADDRESS_LOADING,
  ADDRESS_SELECT
} from './constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const addressChange = (name, value) => {
  return {
    type: ADDRESS_CHANGE,
    payload: { [name]: value }
  };
};

export const addressEditChange = (name, value) => {
  return {
    type: ADDRESS_EDIT_CHANGE,
    payload: { [name]: value }
  };
};

export const handleAddressSelect = value => {
  return {
    type: ADDRESS_SELECT,
    payload: value
  };
};

export const setAddressLoading = value => {
  return {
    type: SET_ADDRESS_LOADING,
    payload: value
  };
};

export const fetchAddresses = () => {
  return async dispatch => {
    try {
      dispatch(setAddressLoading(true));
      const response = await axios.get(`${API_URL}/address`);
      dispatch({ type: FETCH_ADDRESSES, payload: response.data.addresses });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setAddressLoading(false));
    }
  };
};

export const fetchAddress = addressId => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/address/${addressId}`);
      dispatch({ type: FETCH_ADDRESS, payload: response.data.address });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const addAddress = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        address: 'required',
        city: 'required',
        state: 'required',
        country: 'required',
        zipCode: 'required|min:5'
      };

      const newAddress = getState().address.addressFormData;
      const isDefault = getState().address.isDefault;

      const { isValid, errors } = allFieldsValidation(newAddress, rules, {
        'required.address': 'Address is required.',
        'required.city': 'City is required.',
        'required.state': 'State is required.',
        'required.country': 'Country is required.',
        'required.zipCode': 'Zipcode is required.'
      });

      if (!isValid) {
        return dispatch({ type: SET_ADDRESS_FORM_ERRORS, payload: errors });
      }

      const address = { isDefault, ...newAddress };
      const response = await axios.post(`${API_URL}/address/add`, address);

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000
      });

      if (response.data.success) {
        dispatch({
          type: ADD_ADDRESS,
          payload: response.data.address
        });
        dispatch({ type: RESET_ADDRESS });
        // navigate back in component using useNavigate()
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const updateAddress = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        country: 'required',
        city: 'required',
        state: 'required',
        address: 'required',
        zipCode: 'required'
      };

      const newAddress = getState().address.address;

      const { isValid, errors } = allFieldsValidation(newAddress, rules, {
        'required.address': 'Address is required.',
        'required.city': 'City is required.',
        'required.state': 'State is required.',
        'required.country': 'Country is required.',
        'required.zipCode': 'Zipcode is required.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_ADDRESS_FORM_EDIT_ERRORS,
          payload: errors
        });
      }

      const response = await axios.put(`${API_URL}/address/${newAddress._id}`, newAddress);

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000
      });

      if (response.data.success) {
        // navigate back in component using useNavigate()
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const deleteAddress = id => {
  return async dispatch => {
    try {
      const response = await axios.delete(`${API_URL}/address/delete/${id}`);

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000
      });

      if (response.data.success) {
        dispatch({
          type: REMOVE_ADDRESS,
          payload: id
        });
        // navigate back in component using useNavigate()
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
