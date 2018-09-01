import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    
    drawChromeBoiAtCoords(xCoord, yCoord);
  }

   
   toggleCyclingEvent = (event) => {
     toggleCycling();
   }

   resizeEvent = (event) => {
     let keyCode = event.which
     if (keyCode === 65) {
      resize('+');
     } else if (keyCode === 83) {
       resize('-');
     }
   }
  
  render() {
    return (
      <canvas 
        onClick={this.toggleCyclingEvent}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.resizeEvent}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
