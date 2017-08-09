const { getDrawing, clearDrawing, createPath, updatePath } = require('./drawing');

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.emit('drawing', getDrawing());

        socket.on('drawing.clear', () => {
            const drawing = clearDrawing();
            io.emit('drawing', drawing);
        });

        socket.on('path.begin', ({ id, point, color }) => {
            const path = createPath(id, point, color);
            io.emit('path.update', { id, path });
        });
        
        socket.on('path.appendPoint', ({ id, point }) => {
            const path = updatePath(id, point);
            io.emit('path.update', { id, path });
        });

    });
};
