/**
 *
 * error.js
 * This is a generic error handler, it receives the error returned from the server and presents it in a toast
 */

import { toast } from 'react-toastify';
import { signOut } from '../containers/Login/actions';

const handleError = (err, dispatch, title = '') => {
  let message = '';

  if (err.response) {
    if (err.response.status === 400) {
      message = err.response.data.error || 'Please try again!';
    } else if (err.response.status === 404) {
      // Optionally handle 404 errors
      // message = err.response.data.message || 'Resource not found.';
    } else if (err.response.status === 401) {
      message = 'Unauthorized Access! Please login again.';
      dispatch(signOut());
    } else if (err.response.status === 403) {
      message = 'Forbidden! You are not allowed to access this resource.';
    }
  } else if (err.message) {
    message = err.message;
  } else {
    message = 'Your request could not be processed. Please try again.';
  }

  if (title || message) {
    toast.error(`${title ? title + ' - ' : ''}${message}`);
  }
};

export default handleError;
