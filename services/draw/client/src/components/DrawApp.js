import React, { Component } from 'react';
import Canvas from './Canvas';
import { pointsObservable, setPoint } from '../services/points';

class DrawApp extends Component {
  state = {
    points: []
  };
  componentWillMount() {
    this.pointsSubscription = pointsObservable
      .subscribe(points => this.setState({ points }));
  }
  componentWillUnmount() {
    this.pointsSubscription.unsubscribe();
  }
  render() {
    const { points } = this.state;
    return (
      <Canvas
        points={points}
        onSetPoint={({ x, y }) => setPoint({ x, y })} />
    );
  }
}

export default DrawApp;
