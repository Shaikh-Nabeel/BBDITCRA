import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-500 h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
