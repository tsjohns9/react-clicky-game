import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar d-flex justify-content-around">
    <div>{props.clickResult}</div>
    <div>
      Score: {props.score} | High Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;
