import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingIndicator = () => {
  return (
    <div className="loading-spinner">
      <Spinner color="primary" />
      <p className="mt-2">Loading...</p>
    </div>
  );
};

export default LoadingIndicator; 