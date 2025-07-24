import React from 'react';

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
      <p>Points: {player.points}</p>
      <p>Price: £{player.price.toLocaleString()}</p>
    </div>
  );
}

export default PlayerCard;