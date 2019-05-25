import React, { Component } from 'react';
// eslint-disable-next-line
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x, y);
  }
  
  handleOnClick = (event) => {
    toggleCycling()
  }

  handleKeyDown = (event) => {
    if(event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }  
   
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
