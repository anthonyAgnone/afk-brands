import React from 'react';

export default ({ loading, children }) => {
  return loading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    children
  );
};
