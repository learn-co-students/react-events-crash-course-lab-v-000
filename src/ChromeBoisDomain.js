import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    const x = event.clientX;
    const y = event.clientY;

    drawChromeBoiAtCoords(x, y);
  };

  handleKeyPress = event => {
    if (event.key === "a") {
      return resize("+");
    } else {
      return resize("-");
    }
  };

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={() => toggleCycling()}
        onKeyDown={this.handleKeyPress}
        width="900"
        height="600"
        tabIndex="0"
      />
    );
  }
}
