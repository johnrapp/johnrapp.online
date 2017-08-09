import React, { Component } from 'react';

const CANVAS_WIDTH = 350;
const CANVAS_HEIGHT = 350;

class Canvas extends Component {
  renderCanvas(canvas, paths) {
    if (!canvas) { return; }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.lineJoin = "round";
    ctx.lineWidth = 5;

    const drawPath = ({ id, points, color }) => {
      const first = points[0];
      ctx.moveTo(first.x, first.y);

      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach(({x, y}) => ctx.lineTo(x,y));
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
            margin: 10,
            border: '1px solid black',
          }}
        />
    );
  }
}

export default Canvas;
