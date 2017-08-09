import Rx from 'rx';
import socket from './socket';

let drawing;

const drawingSubject = new Rx.Subject();

export const drawingObservable = drawingSubject;

export function beginPath(id, point, color) {
    socket.emit('path.begin', { id, point, color });
}

export function appendPoint(id, point) {
    socket.emit('path.appendPoint', { id, point });
}

export function clearDrawing() {
    socket.emit('drawing.clear');
}

socket.on('drawing', (drw) => {
    drawing = drw;
    drawingObservable.onNext(drawing);
})

socket.on('path.update', ({ id, path }) => {
    drawing.paths[id] = path;
    drawingObservable.onNext(drawing);
});