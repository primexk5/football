import React from 'react';
import Ball from './Ball';
import Player from './Players';

const MiddleLine = ({ x, height }) => (
  <line x1={x} y1="0" x2={x} y2={height} stroke="white" strokeWidth="2" />
);

const CenterCircle = ({ cx, cy, radius }) => (
  <>
    <circle cx={cx} cy={cy} r={radius} stroke="white" strokeWidth="2" fill="none" />
    <circle cx={cx} cy={cy} r="2" fill="white" />
  </>
);

const Goal = ({ x, y, width, height }) => (
  <>
   
    <rect x={x} y={y} width={width} height={height} fill="white" />
  </>
);

const Field = ({ players, ball }) => {
  const pitchWidth = 600;
  const pitchHeight = 400;
  const middleLineX = pitchWidth / 2;
  const centerCircleRadius = 50;
  const goalWidth = 10; 
  const goalDepth = 60; 

  return (
    <div>
      <svg
        width={pitchWidth}
        height={pitchHeight}
        className="bg-green-500 border border-gray-700 rounded-md shadow-md"
      >
        <MiddleLine x={middleLineX} height={pitchHeight} />

        <CenterCircle cx={middleLineX} cy={pitchHeight / 2} radius={centerCircleRadius} />

        <Goal
          x="0"
          y={pitchHeight / 2 - goalDepth / 2}
          width={goalWidth}
          height={goalDepth}
        />
       
        <Goal
          x={pitchWidth - goalWidth}
          y={pitchHeight / 2 - goalDepth / 2}
          width={goalWidth}
          height={goalDepth}
        />

        {players.map((player) => (
          <Player
            key={player.id}
            x={player.x * (pitchWidth / 100)}
            y={player.y * (pitchHeight / 100)}
            color={player.team === 'home' ? 'blue' : 'red'}
          />
        ))}

        <Ball x={ball.x * (pitchWidth / 100)} y={ball.y * (pitchHeight / 100)} />
      </svg>
    </div>
  );
};

export default Field;