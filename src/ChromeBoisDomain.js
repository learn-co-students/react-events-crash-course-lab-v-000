import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleToggleCycling = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
  /* I created an event handler (written as a component method that uses arrow function syntax) called handleToggleCycling. 
   * When fired, handleToggleCycling() invokes the provided toggleCycling() function with no arguments. 
   * The event listener for clicks on the <canvas> element, i.e., <canvas onClick={this.handleToggleCycling}> fired it.
   */
   
  /* I added another event listener to the <canvas> element to capture when a key is pressed, i.e.,
   * <canvas onKeyPress={this.handleKeyPress}>
   * When a key is pressed, the event handler called handleKeyPress, which is a component method written with arrow function syntax,
   * invokes the provided resize function with a single argument of either '+' or '-'
  /* If the key pressed was 'a', it calls resize with '+'
  /* If the key pressed was 's', it calls resize with '-' 
   */
  render() {
    return (
      <canvas 
        onClick={this.handleToggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
