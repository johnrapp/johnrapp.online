const getArchivedDrawings = require('./archived-drawings');
const archiveDrawing = require('./archive-drawing');

module.exports = function api(app) {
    app.post('/', (req, res) => {
        const { drawing, name } = req.body;
        const result = archiveDrawing(drawing, name);
        res.json(result);
    });
    app.get('/', (req, res) => {
        const drawings = getArchivedDrawings();
        res.json(drawings);
    });
};
