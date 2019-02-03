import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  cycle = () => {
    toggleCycling()
  }
 
  resizeMe = (event) => {
    if (event.key === "a") { resize("+") }
    if (event.key === "s") { resize("-") }
  }
  
  render() {
    return (
      <canvas 
        onClick={this.cycle}
        onKeyDown={this.resizeMe}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
