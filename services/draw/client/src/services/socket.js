import io from 'socket.io-client';

const location = window.location;
const HOST = ((location) => {
    const isLocalDevelopment = host.port === '3000';
    if (isLocalDevelopment) {
        return `${location.hostname}:${8080}`;
    } else {
        return location.host;
    }
})(location);

location.host === 'localhost:3000'
    ? 'localhost:8080'
    : location.host === '192.168.1.108:3000'
        ? location.host === '192.168.1.108:3000'
            ? '192.168.1.108:8080'
            : '/';

const socket = io(HOST);

export default socket;