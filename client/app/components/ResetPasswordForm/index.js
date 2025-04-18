import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

const ResetPasswordForm = ({ onSubmit, error }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (formData.password.length < 6) {
      setValidationError('Password must be at least 6 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    onSubmit(formData.password);
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
          value={formData.password}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="confirmPassword">Confirm New Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button color="primary" type="submit" block>
        Reset Password
      </Button>
    </Form>
  );
};

export default ResetPasswordForm; 