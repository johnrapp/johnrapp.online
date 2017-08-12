import React, { Component } from 'react';
import { relativeMouseCoordinates, relativeTouchCoordinates } from '../services/touch-coordinates';

class TouchControls extends Component {
  render() {
    const { children, onBeginPath, onAppendPath, onEndPath } = this.props; 
    return (
        <div className={'TouchControls'}
            onMouseDown={e => {
                this.ongoingPath = true;
                onBeginPath(relativeMouseCoordinates(e));
            }}
            onMouseUp={e => {
                this.ongoingPath = false;
                onEndPath();
            }}
            onMouseMove={e => {
                if (this.ongoingPath) {
                    onAppendPath(relativeMouseCoordinates(e));
                }
            }}
            onTouchStart={e => {
                this.ongoingPath = true;
                onBeginPath(relativeTouchCoordinates(e));
            }}
            onTouchEnd={e => {
                this.ongoingPath = false;
                onEndPath();
            }}
            onTouchMove={e => {
                if (this.ongoingPath) {
                    onAppendPath(relativeTouchCoordinates(e));
                }
            }}
            >
            { children }
        </div>
    );
  }
}

export default TouchControls;
