import React, { Component } from 'react';
// eslint-disable-next-line
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    // let x = event.clientX;
    // let y = event.clientY;

    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
    
  toggleCycling = (event) => {

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
        onClick={toggleCycling()}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
