
import React from 'react';

const Players = ({ x, y, color }) => {
  return (
    <circle cx={x} cy={y} r="8" fill={color} />
  );
};

export default Players;


