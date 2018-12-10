import React from 'react';

export default ({ err, children }) => {
  return err ? (
    <div className="error">Your data is not available</div>
  ) : (
    children
  );
};
