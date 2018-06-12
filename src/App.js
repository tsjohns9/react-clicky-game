import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

import images from './images';

class App extends Component {
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

  randomize(array) {
    const shuffleArr = array.slice();
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

export default App;
