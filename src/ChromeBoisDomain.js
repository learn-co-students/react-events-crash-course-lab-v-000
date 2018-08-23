import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    return drawChromeBoiAtCoords(event.clientX, event.clientY);
  }

 handleMouseClick = (event) => {
   toggleCycling();
 }

 handleButtonPress = (event) => {
   if(event.key === 'a'){
     resize('+');
   } else if(event.key === 's'){
     resize('-');
   }
 }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleButtonPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
