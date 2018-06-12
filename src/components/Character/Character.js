import React from 'react';
import './Character.css';

const Character = props => (
  <div className="card" onClick={props.clickEvent}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;
