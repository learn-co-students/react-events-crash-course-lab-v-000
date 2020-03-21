import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  resize,
  toggleCycling
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    const { clientX, clientY } = event;
    drawChromeBoiAtCoords(clientX, clientY);
  };

  handleClick = _ => {
    toggleCycling();
  };

  handleKeyPress = ({ key }) => {
    const typesByKey = {
      a: "+",
      s: "-"
    };
    const type = typesByKey[key];
    if (type) {
      resize(type);
    }
  };

  render() {
    return (
      <canvas
        onKeyPress={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
