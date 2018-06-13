import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';

import images from '../images';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,

    // contains intro, success, and failure message
    navMessage: 'Click an image to begin!',

    // contains an array of image urls
    allCharacters: images,

    // binds the current this context to checkClicked to have access to the current state
    // when passed down to the Character component
    clickEvent: this.checkClicked.bind(this),

    // will track  each clicked element.
    wasClicked: []
  };

  // used to shuffle the array of images when the DOM loads, and when an image is clicked
  shuffleArray() {
    // creates a copy of the current characters array to modify it by value, and not by reference
    const newArr = this.state.allCharacters.slice();

    // will store the shuffled array
    const shuffleArr = [];

    // tracks our loops
    let i = 0;
    while (i < newArr.length) {
      // grabs random index from newArr, which is a copy of state.allCharacters
      const rando = Math.floor(Math.random() * newArr.length);

      // if shuffleArr does not contain the random index value, then add it to shuffleArr, and add 1 to the counter
      if (!shuffleArr.includes(newArr[rando])) {
        shuffleArr.push(newArr[rando]);
        i++;
      }
      // if the array does contain the random index, then the loop runs again
    }
    return shuffleArr;
  }

  checkClicked(clickedElem) {
    // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const prevState = this.state.wasClicked.slice();

    // shuffles the images
    const shuffled = this.shuffleArray();

    // tracks score
    let score = this.state.score;
    let highScore = this.state.highScore;

    // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if (!this.state.wasClicked.includes(clickedElem)) {
      // if score and highScore are the same, then there is a new highScore value
      if (score === highScore) {
        score++;
        highScore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked item to wasClicked to track that it has been clicked
      prevState.push(clickedElem);
    }

    // resets the current score if the same element was clicked twice
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMessage: 'Incorrect guess!',
        allCharacters: shuffled,
        wasClicked: []
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    return this.setState({
      score: score,
      highScore: highScore,
      navMessage: 'You Guessed Correctly!',
      allCharacters: shuffled,
      wasClicked: prevState
    });
  }

  // shuffles the characters when the DOM loads
  componentWillMount() {
    this.setState({ allCharacters: this.shuffleArray() });
  }

  // renders score to the navbar.
  // passes the randomized state.allCharacters array to Container to create a Character component for each image.
  // passes the this.checkClicked down to container to pass to each Character component to be used for the click event.
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          navMessage={this.state.navMessage}
        />
        <Container characters={this.state.allCharacters} clickEvent={this.state.clickEvent} />
      </div>
    );
  }
}

export default ClickyGame;
