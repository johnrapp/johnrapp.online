import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from './ColorPicker';
import Canvas from './Canvas';
import TouchControls from './TouchControls';
import { drawingObservable, clearDrawing } from '../services/drawing';
import DrawingPath from '../services/path';
import { defaultPathColor } from '../services/path-colors';

class DrawApp extends Component {
  currentPath = null;
  state = {
    drawing: null,
    pathColor: defaultPathColor()
  };
  componentWillMount() {
    this.drawingSubscription = drawingObservable
      .subscribe(drawing => this.setState({ drawing }));
  }
  componentWillUnmount() {
    this.drawingSubscription.unsubscribe();
  }
  render() {
    const { drawing, pathColor } = this.state;
    if (!drawing) {
      return null;
    }

    return (
      <div>
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
        <div style={{ marginLeft: 10 }}>
          <RaisedButton
            label="Clear"
            onTouchTap={clearDrawing}/>
          <ColorPicker
            pathColor={pathColor}
            onPathColorChange={pathColor => this.setState({ pathColor })}
          />
        </div>
      </div>
    );
  }
}

export default DrawApp;
