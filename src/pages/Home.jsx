import React, { useState, useEffect } from 'react';
import Field from '../components/Field';

const Home = () => {
  
  const [players, setPlayers] = useState([
    { id: 1, team: 'home', x: 20, y: 50 },
    { id: 2, team: 'away', x: 80, y: 50 },
   
  ]);

  const [ball, setBall] = useState({ x: 50, y: 50 });


  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) => ({
          ...player,
          x: Math.max(0, Math.min(100, player.x + (Math.random() - 0.5) * 2)),
          y: Math.max(0, Math.min(100, player.y + (Math.random() - 0.5) * 2)),
        }))
      );

      setBall((prevBall) => ({
        x: Math.max(0, Math.min(100, prevBall.x + (Math.random() - 0.5) * 3)),
        y: Math.max(0, Math.min(100, prevBall.y + (Math.random() - 0.5) * 3)),
      }));
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Live Football Match</h1>
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <Field players={players} ball={ball} />
      </div>
    </div>
  );
};

export default Home;