import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    drawChromeBoiAtCoords(x, y)
  }

   instruction = (event) => {
    if(event.which === 65){
      return resize('+')
    } else if (event.which === 83) {

      return resize('-')
    }
  }

  render() {
    return (
      <canvas
        onKeyDown={this.instruction}
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
