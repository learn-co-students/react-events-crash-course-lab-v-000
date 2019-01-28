import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    
    drawChromeBoiAtCoords(x, y);
  }
  
  handleClick = (event) => {
    toggleCycling();
  }
   
  handleKeyDown = (event) => {
    let sym;
    console.log(event.key);
    if (event.key === 'a'){
      sym = '+';
    } else if (event.key === 's') {
      sym = '-';
    }
    
    resize(sym);
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        on
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
