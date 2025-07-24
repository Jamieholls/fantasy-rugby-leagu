import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Fantasy Rugby League</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-team">My Team</Link>
        <Link to="/transfers">Transfers</Link>
      </nav>
    </header>
  );
}

export default Header;