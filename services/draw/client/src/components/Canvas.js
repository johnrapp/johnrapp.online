import React, { Component } from 'react';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const LINE_JOIN = 'round';
const LINE_CAP = 'round';

const { requestAnimationFrame, cancelAnimationFrame } = window;

class Canvas extends Component {

  drawing = null;
  animationFrame = null;

  componentWillUnmount() {
      cancelAnimationFrame(this.animationFrame);
  }

  receivedCanvas(canvas, drawing) {
    if (canvas) {
      this.drawing = drawing;
      this.canvas = canvas;
      if (!this.animationFrame) {
        this.queueFrame();
      }
    }
  }

  renderCanvas() {
    const { canvas, drawing: { paths } } = this;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.lineJoin = LINE_JOIN;
    ctx.lineCap = LINE_CAP;

    const drawPath = ({ id, points, color, brushSize }) => {
      const first = points[0];
      ctx.moveTo(first.x * CANVAS_WIDTH, first.y * CANVAS_HEIGHT);

      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      points.forEach(({x, y}) => ctx.lineTo(x * CANVAS_WIDTH, y * CANVAS_HEIGHT));
      ctx.stroke();
    };

    const pathEntries = Object.entries(paths);
    pathEntries.forEach(([id, path]) => drawPath(path));
    this.queueFrame();
  }

  queueFrame() {
    this.animationFrame = requestAnimationFrame(() => this.renderCanvas());
  }

  render() {
    const { drawing } = this.props; 
    
    return (
        <canvas
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={canvas => this.receivedCanvas(canvas, drawing)}
          style={{
            border: '1px solid black',
            width: '100%',
          }}
        />
    );
  }
}

export default Canvas;
