import React, { Component } from 'react';
import Canvas from './Canvas';
import { drawingObservable } from '../services/drawing';
import DrawingPath from '../services/path';

class DrawApp extends Component {
  currentPath = null;
  state = {
    drawing: { paths: {} }
  };
  componentWillMount() {
    this.drawingSubscription = drawingObservable
      .subscribe(drawing => this.setState({ drawing }));
  }
  componentWillUnmount() {
    this.drawingSubscription.unsubscribe();
  }
  render() {
    const { drawing } = this.state;
    return (
      <Canvas
        drawing={drawing}
        onBeginPath={point => {
            this.currentPath = new DrawingPath(point)
        }}
        onAppendPath={point => {
          this.currentPath.append(point);
        }}
        onEndPath={point => {
          this.currentPath = null;
        }}
      />
    );
  }
}

export default DrawApp;
