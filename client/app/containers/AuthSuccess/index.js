/**
 *
 * AuthSuccess
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import actions from '../../actions';
import setToken from '../../utils/token';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class AuthSuccess extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirectToDashboard: false
    };
  }

  componentDidMount() {
    const tokenParam = this.props.location?.search || window.location.search;
    const jwtCookie = tokenParam
      .slice(tokenParam.indexOf('=') + 1)
      .replace('%20', ' ');

    if (jwtCookie) {
      setToken(jwtCookie);
      localStorage.setItem('token', jwtCookie);
      this.props.setAuth();
      this.setState({ redirectToDashboard: true });
    }
  }

  render() {
    const { authenticated } = this.props;
    const { redirectToDashboard } = this.state;

    if (authenticated || redirectToDashboard) {
      return <Navigate to="/dashboard" replace />;
    }

    return <LoadingIndicator />;
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(props => {
  const location = useLocation();
  return <AuthSuccess {...props} location={location} />;
});
