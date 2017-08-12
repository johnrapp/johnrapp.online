import Rx from 'rx';
import socket from './socket';
import isomorphic from './isomorphic-drawing';

let drawing;

const drawingSubject = new Rx.Subject();

export const drawingObservable = drawingSubject;

export function putPathPoint(id, point, color, brushSize) {
    socket.emit('path.putPoint', { id, point, color, brushSize });
    isomorphic(drawing).putPathPoint(id, point, color, brushSize);
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

const saveResultSubject = new Rx.Subject();
export const saveResultObservable = saveResultSubject;

export function saveDrawing(name) {
    socket.emit('drawing.archive', { drawing, name });
}

socket.on('drawing.archiveResult', (result) => {
    saveResultSubject.onNext(result);
});