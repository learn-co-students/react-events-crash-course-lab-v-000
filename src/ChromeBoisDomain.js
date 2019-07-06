import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x,y);
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
 
  handleKeyPress = (e) => {
    if(e.key === "a"){
      
      resize('+')
    }else if(e.key ==="s"){
      
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
      onMouseMove={this.handleMouseMove}
      onClick={toggleCycling}
      onKeyPress={this.handleKeyPress}
      width='900'
      height='600'
      tabIndex="0">
      </canvas>
    )
  }
}
