import Rx from 'rx';
import socket from './socket';

const drawing = { paths: {} };

const drawingSubject = new Rx.Subject();

export const drawingObservable = drawingSubject;

export function beginPath(id, point) {
    socket.emit('path.begin', { id, point });
}

export function appendPoint(id, point) {
    socket.emit('path.appendPoint', { id, point });
}

socket.on('paths', (paths) => {
    drawing.paths = paths;
    drawingObservable.onNext(drawing);
})


socket.on('path.update', ({ id, path }) => {
    drawing.paths[id] = path;
    drawingObservable.onNext(drawing);
});

// export function setPoint(point) {
//     socket.emit('point added', point);
//     points.push(point);
//     pointsObservable.onNext(points);
// }

// socket.on('point added', (point => {
//     points.push(point);
//     console.log(point)
//     pointsSubject.onNext(points);
// }))