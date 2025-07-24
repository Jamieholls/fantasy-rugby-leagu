import React, { useState } from 'react';
import players from '../data/players';
import PlayerCard from './PlayerCard';

const MAX_BUDGET = 1000000;

function TeamSelector() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const totalCost = selectedPlayers.reduce((sum, p) => sum + p.price, 0);

  const togglePlayer = (player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    } else {
      if (totalCost + player.price <= MAX_BUDGET) {
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        alert('Over budget!');
      }
    }
  };

  return (
    <div>
      <h2>Team Selector</h2>
      <p>Total Cost: £{totalCost.toLocaleString()} / £{MAX_BUDGET.toLocaleString()}</p>
      <div className="player-list">
        {players.map(player => (
          <div key={player.id} onClick={() => togglePlayer(player)}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSelector;