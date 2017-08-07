const points = [];

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.on('point added', (point) => {
            socket.broadcast.emit('point added', point);
        });
    });
};