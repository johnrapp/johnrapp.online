const { getDrawing, clearDrawing, putPathPoint } = require('./drawing');
const { archiveDrawing } = require('./archive');
const log = require('./log');

module.exports = function drawApp(io) {
    io.on('connection', function(socket) {
        socket.emit('drawing', getDrawing());

        socket.on('drawing.clear', () => {
            log.info('CLEARED');
            const drawing = clearDrawing();
            io.emit('drawing', drawing);
        });

        socket.on('path.putPoint', ({ id, point, color, brushSize }) => {
            const path = putPathPoint(id, point, color, brushSize);
            socket.broadcast.emit('path.put', { id, path });
        });

        socket.on('drawing.archive', async ({ drawing, name }) => {
            log.info('ARCHIVE', name);
            const result = await archiveDrawing(drawing, name);
            socket.emit('drawing.archiveResult', result);
        });
    });
};
