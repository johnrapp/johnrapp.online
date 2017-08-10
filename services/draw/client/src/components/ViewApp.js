import React, { Component } from 'react';
import Canvas from './Canvas';
import { drawingObservable } from '../services/drawing';

import './ViewApp.css';

class ViewApp extends Component {
  state = {
    drawing: null,
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
    if (!drawing) {
      return null;
    }

    return (
      <div className={'ViewApp'}>
        <Canvas drawing={drawing} />
      </div>
    );
  }
}

export default ViewApp;
