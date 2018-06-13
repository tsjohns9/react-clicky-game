import React from 'react';
import './Character.css';

const Character = props => (
  <div
    className="card"
    onClick={e => {
      props.clickEvent(e.target.src);
    }}
  >
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;
