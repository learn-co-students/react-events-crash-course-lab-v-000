import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

    handleClick = (e) => {
      toggleCycling()
      console.log('This was clicked.');
    }

   handleKeyPress = (e) => {
     if(e.key === 'a'){
       console.log('hit a!')
       resize('+')
     }
     if(e.key == 's'){
       console.log('hit s!')
       resize('-')
     }
   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}>
      </canvas>
    )
  }
}
