import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  onPressOfKey = (event) => {
    if (event.key == 'a') {
      resize('+')
    }
    else if (event.key == 's'){
      resize('-')
    }
       
  }
  
  render() {
    return (
      <canvas 
        onKeyDown={this.onPressOfKey}
        onClick={toggleCycling()}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
