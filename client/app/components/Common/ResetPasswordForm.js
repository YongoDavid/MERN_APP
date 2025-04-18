/**
 *
 * ResetPasswordForm
 *
 */

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ResetPasswordForm = ({ onSubmit, loading, error }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (password !== confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setValidationError('Password must be at least 6 characters long');
      return;
    }

    onSubmit({ password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert color="danger">{error}</Alert>}
      {validationError && <Alert color="danger">{validationError}</Alert>}
      
      <FormGroup>
        <Label for="password">New Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </FormGroup>
      
      <Button color="primary" type="submit" disabled={loading}>
        {loading ? 'Resetting...' : 'Reset Password'}
      </Button>
      
      <Button 
        color="link" 
        className="ml-2" 
        onClick={() => navigate('/login')}
      >
        Back to Login
      </Button>
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default ResetPasswordForm; 