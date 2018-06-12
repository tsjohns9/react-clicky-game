import React from 'react';
import './Container.css';
import Character from '../Character';

const Container = props => (
  <div className="container d-flex flex-wrap justify-content-center">
    {props.characters.map((a, i) => <Character name={a} key={i} />)}
  </div>
);

export default Container;
