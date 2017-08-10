import Rx from 'rx';
import socket from './socket';
import isomorphic from './isomorphic-drawing';

let drawing;

const drawingSubject = new Rx.Subject();

export const drawingObservable = drawingSubject;

export function putPathPoint(id, point, color) {
    socket.emit('path.putPoint', { id, point, color });

    isomorphic(drawing).putPathPoint(id, point, color);
    drawingObservable.onNext(drawing);
}

export function clearDrawing() {
    socket.emit('drawing.clear');
}

socket.on('drawing', (drw) => {
    drawing = drw;
    drawingObservable.onNext(drawing);
})

socket.on('path.put', ({ id, path }) => {
    drawing.paths[id] = path;
    drawingObservable.onNext(drawing);
});