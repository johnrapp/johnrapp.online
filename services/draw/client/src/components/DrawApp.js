import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import DrawArea from './DrawArea';
import ClearButton from './ClearButton';
import { drawingObservable, clearDrawing } from '../services/drawing';
import { defaultPathColor } from '../services/path-colors';

import './DrawApp.css';

class DrawApp extends Component {
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
      <div className={'DrawApp'}>
        <div className={'draw-container'}>
          <DrawArea drawing={drawing} pathColor={pathColor} />
        </div>
        
        <div className={'controls-container'}>
          <ClearButton onClear={clearDrawing} />
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
