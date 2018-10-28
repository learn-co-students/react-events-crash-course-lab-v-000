import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    console.log("event", event)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleKeyDownEvent = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => { toggleCycling() }}
        onKeyDown={this.handleKeyDownEvent}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
