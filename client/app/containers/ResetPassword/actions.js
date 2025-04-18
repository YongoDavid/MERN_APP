/**
 *
 * ResetPassword actions
 *
 */

import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './constants';

/**
 * Reset Password
 */
export function resetPassword(payload) {
  return {
    type: RESET_PASSWORD,
    payload
  };
}

/**
 * Reset Password Success
 */
export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS
  };
}

/**
 * Reset Password Error
 */
export function resetPasswordError(error) {
  return {
    type: RESET_PASSWORD_ERROR,
    error
  };
}