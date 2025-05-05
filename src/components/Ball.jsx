import React from 'react';

const Ball = ({ x, y }) => {
  return (
    <circle cx={x} cy={y} r="5" fill="white" />
  );
};

export default Ball;