/*
 *
 * WishList actions
 *
 */

import { toast } from 'react-toastify';
import axios from 'axios';

import { FETCH_WISHLIST, SET_WISHLIST_LOADING } from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

export const updateWishlist = (isLiked, productId) => {
  return async (dispatch, getState) => {
    try {
      if (getState().authentication.authenticated === true) {
        const response = await axios.post(`${API_URL}/wishlist`, {
          isLiked,
          product: productId
        });

        if (response.data.success === true) {
          toast.success(response.data.message, {
            position: 'top-right',
            autoClose: 3000
          });
          dispatch(fetchWishlist());
        }
      } else {
        toast.warning('Please login to wishlist a product', {
          position: 'top-right',
          autoClose: 3000
        });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// fetch wishlist api
export const fetchWishlist = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_WISHLIST_LOADING, payload: true });

      const response = await axios.get(`${API_URL}/wishlist`);

      dispatch({ type: FETCH_WISHLIST, payload: response.data.wishlist });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_WISHLIST_LOADING, payload: false });
    }
  };
};
