import React, { Component } from 'react';
import Canvas from './Canvas';
import TouchControls from './TouchControls';
import DrawingPath from '../services/path';

class DrawArea extends Component {
  currentPath = null;
  render() {
    const { drawing, pathColor } = this.props;
    
    return (
      <TouchControls
        onBeginPath={point => {
            this.currentPath = new DrawingPath(point, pathColor)
        }}
        onAppendPath={point => {
            this.currentPath.append(point);
        }}
        onEndPath={point => {
            this.currentPath = null;
        }}
      >
        <Canvas drawing={drawing} />
      </TouchControls>
    );
  }
}

export default DrawArea;
