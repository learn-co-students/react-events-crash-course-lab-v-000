import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleMouseMove = (e) => {
     this.setState({x: e.clientX, y: e.clientY});
     return drawChromeBoiAtCoords(this.state.x, this.state.y)
  }
  handleToggle = (e) => {
    toggleCycling();
  }

  handleResize = (e) => {
    if(e.key == 'a') {
      resize('+');
    } else if(e.key =='s') {
      resize('-');
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleToggle}
        onKeyPress={this.handleResize}>
      </canvas>
    )
  }
}
