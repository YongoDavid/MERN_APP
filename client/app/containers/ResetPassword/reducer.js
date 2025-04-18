/**
 *
 * ResetPassword reducer
 *
 */

import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './constants';

const initialState = {
  isLoading: false,
  error: null,
  success: false
};

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: false
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        success: false
      };

    default:
      return state;
  }
}

export default resetPasswordReducer; 