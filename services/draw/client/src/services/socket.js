import io from 'socket.io-client';

const location = window.location;
const HOST = ((location) => {
    const isLocalDevelopment = location.port === '3000';
    if (isLocalDevelopment) {
        return `${location.hostname}:${8080}`;
    } else {
        return location.host;
    }
})(location);

const socket = io(HOST);

export default socket;