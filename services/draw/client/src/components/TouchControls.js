import React, { Component } from 'react';

function computedDimensions(element) {
    const styles = getComputedStyle(element);
    const dimensionInPx = string => +string.slice(0, -('px'.length));
    return {
      width: dimensionInPx(styles.width),
      height: dimensionInPx(styles.height)
    };
}
function relativeCoordinates({ width, height }, absoluteX, absoluteY) {
  return { x: absoluteX / width, y: absoluteY / height };
}

function relativeMouseCoordinates(event) {
  const target = event.target;
  const absoluteX = event.pageX - target.offsetLeft;
  const absoluteY = event.pageY - target.offsetTop;

  return relativeCoordinates(computedDimensions(target), absoluteX, absoluteY)
}

function relativeTouchCoordinates(event) {
  const target = event.target;
  const absoluteX = event.touches[0].pageX - target.offsetLeft;
  const absoluteY = event.touches[0].pageY - target.offsetTop;

  return relativeCoordinates(computedDimensions(target), absoluteX, absoluteY)
}

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
