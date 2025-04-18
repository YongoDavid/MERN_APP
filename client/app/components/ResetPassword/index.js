import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingIndicator from '../Common/LoadingIndicator';
import ResetPasswordForm from '../ResetPasswordForm';

const ResetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tokenValid, setTokenValid] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get(`/api/auth/validate-reset-token/${token}`);
        setTokenValid(true);
      } catch (err) {
        setError('Invalid or expired reset token. Please request a new password reset link.');
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [token]);

  const handleResetPassword = async (newPassword) => {
    setLoading(true);
    setError('');

    try {
      await axios.post('/api/auth/reset-password', {
        token,
        newPassword,
      });
      navigate('/login', { 
        state: { message: 'Password has been reset successfully. Please login with your new password.' }
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password. Please try again.');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardBody>
              <h2 className="text-center mb-4">Reset Password</h2>
              {!tokenValid ? (
                <div className="text-center">
                  <p className="text-danger">{error}</p>
                  <button
                    className="btn btn-link"
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request New Reset Link
                  </button>
                </div>
              ) : (
                <ResetPasswordForm
                  onSubmit={handleResetPassword}
                  error={error}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword; 