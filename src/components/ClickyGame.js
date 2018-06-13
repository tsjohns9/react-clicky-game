import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';

import images from '../images';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    clickResult: 'Click an image to begin!',
    allCharacters: images,
    clickEvent: this.shuffle.bind(this),
    wasClicked: []
    // need an array to track clicked images
    // once an image is clicked it gets pushed to the array
    // for each click, check if the image is in the array
    // if the image is not in the array, add 1 to score
    // else, reset the score

    // track high score
    // if score === highscore
    // add 1 to highscore for each 1 added to score
  };

  shuffle(clickedElem) {
    const newArr = this.state.allCharacters.slice();
    const prevState = this.state.wasClicked.slice();
    const shuffleArr = [];
    let score = this.state.score;
    let highScore = this.state.highScore;
    let i = 0;

    while (i < newArr.length) {
      const rando = Math.floor(Math.random() * newArr.length);
      if (!shuffleArr.includes(newArr[rando])) {
        shuffleArr.push(newArr[rando]);
        i++;
      }
    }

    if (clickedElem && !this.state.wasClicked.includes(clickedElem)) {
      console.log(score === highScore);
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }

      prevState.push(clickedElem);
    }

    if (clickedElem && this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      console.log('already clicked!');
      return this.setState({ allCharacters: shuffleArr, wasClicked: [], score, highScore });
    }

    return this.setState({
      allCharacters: shuffleArr,
      wasClicked: prevState,
      score: score,
      highScore: highScore
    });
  }

  componentWillMount() {
    this.shuffle();
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          clickResult={this.state.clickResult}
        />
        <Container characters={this.state.allCharacters} clickEvent={this.state.clickEvent} />
      </div>
    );
  }
}

export default ClickyGame;
