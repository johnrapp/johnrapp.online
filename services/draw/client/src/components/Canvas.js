import React, { Component } from 'react';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const LINE_JOIN = 'round';
const LINE_CAP = 'round';
const LINE_WIDTH = 5;

class Canvas extends Component {
  renderCanvas(canvas, paths) {
    if (!canvas) { return; }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.lineJoin = LINE_JOIN;
    ctx.lineCap = LINE_CAP;
    ctx.lineWidth = LINE_WIDTH;

    const drawPath = ({ id, points, color }) => {
      const first = points[0];
      ctx.moveTo(first.x * CANVAS_WIDTH, first.y * CANVAS_HEIGHT);

      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach(({x, y}) => ctx.lineTo(x * CANVAS_WIDTH, y * CANVAS_HEIGHT));
      ctx.stroke();
    };

    const pathEntries = Object.entries(paths);
    pathEntries.forEach(([id, path]) => drawPath(path));
  }

  render() {
    const { drawing: { paths } } = this.props; 
    
    return (
        <canvas
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={canvas => this.renderCanvas(canvas, paths)}
          style={{
            border: '1px solid black',
            width: '100%',
          }}
        />
    );
  }
}

export default Canvas;
