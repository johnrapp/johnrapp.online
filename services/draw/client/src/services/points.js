import Rx from 'rx';
import socket from './socket';

const points = [];

const pointsSubject = new Rx.Subject();

export const pointsObservable = pointsSubject;

export function setPoint(point) {
    socket.emit('point added', point);
    points.push(point);
    pointsObservable.onNext(points);
}

socket.on('point added', (point => {
    points.push(point);
    console.log(point)
    pointsSubject.onNext(points);
}))