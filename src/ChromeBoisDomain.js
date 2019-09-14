import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
//to use in function below 

export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
           drawChromeBoiAtCoords(event.clientX, event.clientY); //why does this work? 

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
        onClick={toggleCycling} //why not this.toggleCycling? 
        onMouseMove={this.handleMouseMove}
        onKeyPress={(e) => {
          if (e.key === 'a') {
            resize('+')
          }
          if (e.key === 's') {
            resize('-')
          }
        }
      }
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
