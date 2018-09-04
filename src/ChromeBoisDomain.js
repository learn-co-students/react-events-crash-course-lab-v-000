import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x  = event.clientX;
    let y = event.clientY;
    // onMouseMove, call handleMouseMove and pass event x and y coords to drawChromeBoiAtCoords
    drawChromeBoiAtCoords(x, y)
  }

  toggleCycling = (event) => {
  }

  handleKeyPress = (event) => {
    if (event.key == 'a') {
      return resize('+');
    } else if (event.key == 's') {
      return resize('-');
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        //following above, name a function to run on event as such: handleEventName
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
