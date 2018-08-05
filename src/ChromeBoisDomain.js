import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }

  handleClick = (event) => {
    toggleCycling();
  }

  handleKeyPress = (event) => {
    if(event.which === 65) {
      resize('+');
    } else if (event.which === 83) {
      resize('-');
    }
  }

  render() {
    return (
      <canvas
      onMouseMove={this.handleMouseMove}
      onClick={this.handleClick}
      onKeyDown={this.handleKeyPress}
      width='900'
      height='600'
      tabIndex="0">
      </canvas>
    )
  }
}
