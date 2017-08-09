import React, { Component } from 'react';
import TouchControls from './TouchControls';

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
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.strokeStyle = "#df4b26";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;

    const drawPoint = ({ x, y }) => {
      const SQUARE_SIZE = 4;
      ctx.fillRect(x - SQUARE_SIZE / 2, y - SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
    };

    //points.forEach(drawPoint);
    const first = path[0];
    if (first) {
      ctx.moveTo(first.x, first.y);
      ctx.beginPath();
      path.forEach(({x, y}) => ctx.lineTo(x,y));
      ctx.stroke();
    }
  }

  render() {
    const { points, onSetPoint } = this.props; 
    return (
      <TouchControls
        onStartPath={point => {path = [point]; this.setState({date: Date.now()})}}
        onAppendPath={point => {path.push(point); this.setState({date: Date.now()})}}
        onEndPath={point => {path = []; this.setState({date: Date.now()})}}
      >
        <canvas
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={canvas => this.renderCanvas(canvas, points)}
          style={{ border: '1px solid black' }}
        />
      </TouchControls>
    );
  }
}

let path = [];

export default Canvas;
