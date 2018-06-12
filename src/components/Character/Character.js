import React from 'react';
import './Character.css';

const Character = props => (
  <div className="card">
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;
