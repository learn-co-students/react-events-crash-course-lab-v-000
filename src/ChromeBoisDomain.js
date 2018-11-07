import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => drawChromeBoiAtCoords(event.clientX, event.clientY)

  handleToggleCycling = (e) => toggleCycling()

  handleKeyDown = (e) => {
     if(e.which == 65) {
       resize('+')
     } else if (e.which == 83) {
       resize('-')
     }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
