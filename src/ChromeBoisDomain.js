import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  }

  handleMouseClick = (event) => {
    toggleCycling();
  }

  handleKeyDown = (event) => {
    if (event.key == 'a') {
      resize('+');
    }else if (event.key == 's') {
      resize('-');
    }else {
      resize();
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
