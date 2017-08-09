const paths = {};

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.emit('paths', paths);

        socket.on('path.begin', ({ id, point }) => {
            const path = { points: [point] };
            paths[id] = path;

            io.emit('path.update', { id, path });
        });
        socket.on('path.appendPoint', ({ id, point }) => {
            const path = paths[id];
            path.points.push(point);
            io.emit('path.update', { id, path });
        });
    });
};