import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  
  handleMouseClick = () => {
    toggleCycling();
  }

    handleKeyClick = (event) => {

      if(event.key === "s"){
       resize('-')
     }
     if(event.key === "a"){
       resize('+')
     }

    }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyPress={this.handleKeyClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
