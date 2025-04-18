/**
 *
 * ResetPassword
 *
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';

import actions from '../../actions';
import { resetPassword } from './actions';
import ResetPasswordForm from '../../components/Common/ResetPasswordForm';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

const ResetPassword = (props) => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verify token validity here if needed
    // For example, make an API call to check if the token is valid
  }, [token]);

  const handleResetPassword = async (values) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Here you would typically make an API call to reset the password
      // For example:
      // await axios.post(`${API_URL}/auth/reset-password`, { token, password: values.password });
      
      // For now, we'll just simulate a successful reset
      setTimeout(() => {
        setIsLoading(false);
        navigate('/login', { state: { message: 'Password reset successful. Please login with your new password.' } });
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.message || 'Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="reset-password">
      <Helmet>
        <title>Reset Password | MERN Store</title>
        <meta name="description" content="Reset your password" />
      </Helmet>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <h1 className="text-center mb-4">Reset Password</h1>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <ResetPasswordForm 
              onSubmit={handleResetPassword} 
              loading={isLoading} 
              error={error} 
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(ResetPassword); 