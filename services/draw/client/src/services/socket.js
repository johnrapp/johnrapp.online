const HOST = 'localhost:8080';

const io = window.io;
const socket = io(HOST);

export default socket;