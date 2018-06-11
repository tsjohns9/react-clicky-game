import React from 'react';
import './Character.css';
// import beth from './images/beth.png';
// import birdperson from './images/birdperson.png';
// import evilmorty from './images/evilmorty.png';
// import gianthead from './images/gianthead.png';
// import goldenford from './images/goldenford.png';
// import jerry from './images/jerry.png';
// import jessica from './images/jessica.png';
// import meeseeks from './images/meeseeks.png';
// import morty from './images/morty.png';
// import mr from './images/mr.png';
// import rick from './images/rick.png';
// import summer from './images/summer.png';

const Character = props => (
  <div className="card">
    <img className="card-img-top" src={require('./images/' + props.name + '.png')} alt="" />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
    </div>
  </div>
);

export default Character;
