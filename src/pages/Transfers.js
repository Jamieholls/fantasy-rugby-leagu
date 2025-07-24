import React from 'react';
import players from '../data/players';
import PlayerCard from '../components/PlayerCard';

function Transfers() {
  return (
    <div>
      <h2>Transfers</h2>
      <p>Buy and sell players based on performance and value!</p>
      <div className="player-list">
        {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default Transfers;