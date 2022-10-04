import React, { Component } from 'react'
 
import fluidAnimation from 'react-fluid-animation/dist/fluid-animation';

 
export default class App extends Component {
  render () {
    return (
      <fluidAnimation
        style={{ height: '100vh' }}
      />
    )
  }
}
