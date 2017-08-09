const { getDrawing, clearDrawing, createPath, updatePath } = require('./drawing');
const log = require('./log');

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.emit('drawing', getDrawing());

        socket.on('drawing.clear', () => {
            log.info('CLEARED');
            const drawing = clearDrawing();
            io.emit('drawing', drawing);
        });

        socket.on('path.begin', ({ id, point, color }) => {
            log.info('NEW PATH', color);
            const path = createPath(id, point, color);
            io.emit('path.update', { id, path });
        });
        
        socket.on('path.appendPoint', ({ id, point }) => {
            const path = updatePath(id, point);
            io.emit('path.update', { id, path });
        });

    });
};
