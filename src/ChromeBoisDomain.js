import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
      return drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
  
  handleClick = () => {
    return toggleCycling();
  }
   
  handleKeyDown = (e) => {
    if (e.key === 'a') {
      return resize('+');
    }
    else if (e.key === 's') { 
      return resize('-')
    }

  
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
