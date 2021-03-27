import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    drawChromeBoiAtCoords(x, y)
  }
  handleMouseClick = () => { toggleCycling() }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key is pressed. When a key is pressed, an event handler should invoke the provided `resize` function with a single argument of either '+' or '-' if the key pressed was 'a', then it should call `resize` with '+' if the key pressed was 's', then it should call `resize` with '-' 
  */
  handleKeyPress = (e) => {
    let sym;
    let letter = e.key;
    if (letter === "a") {
      sym = "+"
    } else if (letter === "s") {
      sym = "-"
    }
    resize(sym);
  }

  render() {
    return (
      <canvas
        onMouseMove={e => this.handleMouseMove(e)}
        onClick={this.handleMouseClick}
        onKeyPress={e => this.handleKeyPress(e)}
        width="900"
        height="600"
        tabIndex="0">
      </canvas>
    )
  }
}
