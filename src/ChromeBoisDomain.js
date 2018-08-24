import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }


  handleKeyPress = (event) => {
    let pressedKey = event.key
    if (pressedKey === 'a') {
      resize('+')
    } else if (pressedKey === 's') {
      resize('-')
    }
  }
  
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
