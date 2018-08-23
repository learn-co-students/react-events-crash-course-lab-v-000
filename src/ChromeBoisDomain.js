import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    return drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   handleKeyPress = (event) => {
     let val
     if(event.key === 'a') {
       val = '+'
     }
     if(event.key === 's') {
       val = '-'
     }
     resize(val)
   }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        onClick={toggleCycling}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
