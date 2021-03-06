import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-Links">
            <Link style={navStyle} to='/'>
            <li>Home</li>
            </Link>
            <Link style={navStyle} to='/weather'>
            <li>Weather</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;