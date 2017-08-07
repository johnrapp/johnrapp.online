import React, { Component } from 'react';

const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 512;

function canvasCoordinates(event) {
  const canvas = event.target;
  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;
  return { x, y };
}

class Canvas extends Component {
  renderCanvas(canvas, points) {
    if (!canvas) { return; }
    const ctx = canvas.getContext('2d');

    const drawPoint = ({ x, y }) => {
      const SQUARE_SIZE = 4;
      ctx.fillRect(x - SQUARE_SIZE / 2, y - SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
    };

    points.forEach(drawPoint);
  }

  render() {
    const { points, onSetPoint } = this.props; 
    return (
      <canvas
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        ref={canvas => this.renderCanvas(canvas, points)}
        style={{ border: '1px solid black' }}
        onClick={e => { onSetPoint(canvasCoordinates(e)) }}
      />
    );
  }
}

export default Canvas;
