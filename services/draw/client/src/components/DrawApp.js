import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from './ColorPicker';
import DrawArea from './DrawArea';
import { drawingObservable, clearDrawing } from '../services/drawing';
import { defaultPathColor } from '../services/path-colors';

import './DrawApp.css';

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
        <div className={'draw-container'}>
          <DrawArea drawing={drawing} pathColor={pathColor} />
        </div>
        
        <div className={'controls-container'}>
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
