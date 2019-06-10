import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
     <canvas onMouseMove={drawChromeBoiAtCoords(x, y)}>Tickle me!</canvas>
  }

   toggleCycling = () => {
     <canvas onClick={toggleCycling()}></canvas>
   }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

   resize = (event) => {
     const key = event.key;
     if (key === "a") {
       var type = "+"
     } else if (key === "s"){
       var type = "-"
     }
      <canvas onKeyDown={resize(type)}></canvas>
   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycling}
        onKeyDown={this.resize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
