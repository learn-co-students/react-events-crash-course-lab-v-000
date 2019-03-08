import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove(e) {
		let x = e.clientX;
		let y = e.clientY;
		drawChromeBoiAtCoords(x, y);
		}

  handleToggle() {
		toggleCycling();
	}

	handleKeyDown(e) {
		if (e.key === 'a') {
			resize('+');
		}
		if (e.key ==='s') {
			resize('-');
		}
	}

  render() {
    return (
      <canvas
				onKeyDown={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
				onClick={this.handleToggle}

        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
