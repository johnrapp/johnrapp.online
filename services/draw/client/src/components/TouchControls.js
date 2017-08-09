import React, { Component } from 'react';

function relativeMouseCoordinates(event) {
  const target = event.target;
  const x = event.pageX - target.offsetLeft;
  const y = event.pageY - target.offsetTop;
  return { x, y };
}

function relativeTouchCoordinates(event) {
  const target = event.target;
  const x = event.touches[0].pageX - target.offsetLeft;
  const y = event.touches[0].pageY - target.offsetTop;
  return { x, y };
}

class TouchControls extends Component {
  render() {
    const { children, onBeginPath, onAppendPath, onEndPath } = this.props; 
    return (
        <div
            style={{
                display: 'inline',
            }}
            onMouseEnter={e => { this.mouseInside = true }}
            onMouseLeave={e => {
                this.mouseInside = false
            //    onEndPath(relativeMouseCoordinates(e));
            }}
            onMouseDown={e => {
                this.mouseDown = true;
                onBeginPath(relativeMouseCoordinates(e));
            }}
            onMouseUp={e => {
                this.mouseDown = false;
                onEndPath();
            }}
            onMouseMove={e => {
                if (this.mouseDown) {
                    onAppendPath(relativeMouseCoordinates(e));
                }
            }}
            onTouchStart={e => {
                this.mouseDown = true;
                onBeginPath(relativeTouchCoordinates(e));
            }}
            onTouchEnd={e => {
                this.mouseDown = false;
                onEndPath();
            }}
            onTouchMove={e => {
                if (this.mouseDown) {
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
