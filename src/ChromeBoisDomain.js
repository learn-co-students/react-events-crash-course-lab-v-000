import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }

  handleClick = () => {
    toggleCycling()
  }

  handlePress = (event) => {
    const key = event.key
    if (key === "a") {
      resize("+")
    } else if (key === "s") {
      resize("-")
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handlePress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
