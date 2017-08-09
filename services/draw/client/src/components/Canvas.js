import React, { Component } from 'react';
import TouchControls from './TouchControls';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 550;

function canvasCoordinates(event) {
  const canvas = event.target;
  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;
  return { x, y };
}
class Canvas extends Component {
  renderCanvas(canvas, paths) {
    if (!canvas) { return; }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.strokeStyle = "#df4b26";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;

    const drawPoint = ({ x, y }) => {
      const SQUARE_SIZE = 4;
      ctx.fillRect(x - SQUARE_SIZE / 2, y - SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
    };
    const drawPath = ({ id, points }) => {
      const first = points[0];
      if (first) {
        ctx.moveTo(first.x, first.y);

        ctx.beginPath();
        points.forEach(({x, y}) => ctx.lineTo(x,y));
        ctx.stroke();
      }
    };

    const pathEntries = Object.entries(paths);
    pathEntries.forEach(([id, path]) => drawPath(path));
  }

  render() {
    const { drawing: { paths }, onBeginPath, onAppendPath, onEndPath } = this.props; 
    return (
      <TouchControls
        onBeginPath={onBeginPath}
        onAppendPath={onAppendPath}
        onEndPath={onEndPath}
      >
        <canvas
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={canvas => this.renderCanvas(canvas, paths)}
          style={{
            margin: 10,
            border: '1px solid black',
          }}
        />
      </TouchControls>
    );
  }
}

let path = [];

export default Canvas;
