import React, { Component } from 'react';
import DrawArea from './DrawArea';
import ColorPicker from './ColorPicker';
import BrushSizePicker from './BrushSizePicker';
import BrushIndicator from './BrushIndicator';
import ClearButton from './ClearButton';
import SaveButton from './SaveButton';
import { drawingObservable } from '../services/drawing';
import { defaultPathColor } from '../services/path-colors';
import { defaultBrushSize } from '../services/brush-sizes';

import './DrawApp.css';

class DrawApp extends Component {
  state = {
    drawing: null,
    pathColor: defaultPathColor(),
    brushSize: defaultBrushSize()
  };
  componentWillMount() {
    this.drawingSubscription = drawingObservable
      .subscribe(drawing => this.setState({ drawing }));
  }
  componentWillUnmount() {
    this.drawingSubscription.unsubscribe();
  }
  render() {
    const { drawing, pathColor, brushSize } = this.state;
    if (!drawing) {
      return null;
    }

    return (
      <div className={'DrawApp'}>
        <div className={'draw-container'}>
          <DrawArea
            drawing={drawing}
            pathColor={pathColor}
            brushSize={brushSize}
          />
        </div>
        
        <div className={'controls-container'}>
          <ClearButton />
          <SaveButton />
          <ColorPicker
            pathColor={pathColor}
            onPathColorChange={pathColor => this.setState({ pathColor })}
          />
          <BrushSizePicker
            brushSize={brushSize}
            onBrushSizeChange={brushSize => this.setState({ brushSize })}
          />
          <BrushIndicator
            brushColor={pathColor}
            brushSize={brushSize}
          />
        </div>
      </div>
    );
  }
}

export default DrawApp;
