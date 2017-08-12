import socket from './socket';

export default function log(...args) {
    socket.emit('server-log', [args]);
}