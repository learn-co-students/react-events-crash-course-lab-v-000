import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
     let x = e.clientX;
     let y = e.clientY;
     drawChromeBoiAtCoords(x, y);
  }

  handleToggleCycling = (e) => {
    toggleCycling();
  }

  handleResize = (e) => {
    if (e.key === 'a')
      resize('+');
    else if (e.key === 's') {
      resize('-');
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"

        onClick={this.handleToggleCycling}

        onKeyPress={this.handleResize}>
      </canvas>
    )
  }
}
