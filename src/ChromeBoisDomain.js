import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    console.log(event.clientX)
    console.log(event)
    drawChromeBoiAtCoords(event.clientX, event.clientY)


  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */


    // <canvas onClick={this.toggleCycling()}>



  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

   handleKeyDown = (event) => {
     if (event.key == 'a') {
       return resize('+')
     } else if (event.key == 's') {
       return resize('-')
     }
   }


//
// if event.keypressed was a then give + as arg, otherwise -
//    <canvas onClick={this.resize}>
// <div onClick={canClick ? this.handler : undefined} />

//   render() {
//     return (
//       <canvas
//         onMouseMove={this.handleMouseMove}
//         onClick={this.toggleCycling}
//         // onKeydown={ }
//         width='900'
//         height='600'
//         tabIndex="0">
//       </canvas>
//     )
//   }
// }



// console.log(e.keycode)
// Since your're importing toggleCycling you don't need the this keyword in front of it.
// We'll use this for methods created inside the component

render() {
  return (
    <canvas
      onMouseMove={this.handleMouseMove}
      onClick={toggleCycling()}
      onKeyDown={this.handleKeyDown}
      width='900'
      height='600'
      tabIndex="0">
    </canvas>
  )
}
}

//
// onKeydown={ if (this.event.key == 'a') {
//   this.resize(+)
// } else if (this.event.key == 's') {
//   this.resize(-)
// }}
