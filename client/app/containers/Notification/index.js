/**
 *
 * Notification
 *
 */

import React from 'react';
import { toast } from 'react-toastify'; // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing styles for react-toastify

class Notification extends React.PureComponent {
  componentDidMount() {
    const { notifications } = this.props;
    // Display notifications if there are any
    notifications.forEach(notification => {
      if (notification.type === 'success') {
        toast.success(notification.message, { position: 'top-right', autoClose: 5000 });
      } else if (notification.type === 'error') {
        toast.error(notification.message, { position: 'top-right', autoClose: 5000 });
      }
      // You can add more types (like info, warning, etc.) based on your notification types
    });
  }

  render() {
    return null; // We don't need to render any JSX in this component as react-toastify will handle displaying the notifications
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps)(Notification);
