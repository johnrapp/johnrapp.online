import React, { Component } from 'react';
import { runDrawApplication, stopDrawApplication } from '../draw/index';

class App extends Component {
  componentWillUnmount() {
    stopDrawApplication(canvas);
  }

  onReceiveCanvas(canvas) {
    runDrawApplication(canvas);
  }

  render() {
    return (
      <canvas ref={canvas => this.onReceiveCanvas(canvas)} />
    );
  }
}

export default App;
