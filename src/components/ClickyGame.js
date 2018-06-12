import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';

import images from '../images';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    clickResult: 'Click an image to begin!',
    allCharacters: images
    // need an array to track clicked images
    // once an image is clicked it gets pushed to the array
    // for each click, check if the image is in the array
    // if the image is not in the array, add 1 to score
    // else, reset the score

    // track high score
    // if score === highscore
    // add 1 to highscore for each 1 added to score
  };

  shuffle(array) {
    const newArr = array.slice();
    const shuffleArr = [];

    let i = 0;
    while (i < newArr.length) {
      const rando = Math.floor(Math.random() * newArr.length);
      if (!shuffleArr.includes(newArr[rando])) {
        shuffleArr.push(newArr[rando]);
        i++;
      }
    }
    console.log(shuffleArr);
    return this.setState({ allCharacters: shuffleArr });
  }

  componentWillMount() {
    this.shuffle(this.state.allCharacters);
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          clickResult={this.state.clickResult}
        />
        <Container characters={this.state.allCharacters} />
      </div>
    );
  }
}

export default ClickyGame;
