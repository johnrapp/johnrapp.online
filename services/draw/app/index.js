const { getDrawing, clearDrawing, putPathPoint } = require('./drawing');
const log = require('./log');

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.emit('drawing', getDrawing());

        socket.on('drawing.clear', () => {
            log.info('CLEARED');
            const drawing = clearDrawing();
            io.emit('drawing', drawing);
        });

        socket.on('path.putPoint', ({ id, point, color }) => {
            const path = putPathPoint(id, point, color);
            socket.broadcast.emit('path.put', path);
        });
    });
};
