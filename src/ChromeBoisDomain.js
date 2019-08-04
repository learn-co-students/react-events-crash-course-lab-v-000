import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
   let mouseX = event.clientX;
   let mouseY = event.clientY;

   drawChromeBoiAtCoords(mouseX, mouseY);
  }
 
  handleKeyPress = (event) => {

    if (event.key === "a") {
      resize("+")
    }

    if (event.key === "s"){
      resize("-")
    }
  }
        
  render() {
   return (
     <canvas
       onMouseMove={this.handleMouseMove}
       onClick={() => {toggleCycling()}}
       onKeyPress={this.handleKeyPress}
       width='900'
       height='600'
       tabIndex="0">
     </canvas>
   )
  }
}
