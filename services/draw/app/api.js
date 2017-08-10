const { getArchivedDrawings } = require('./archive');

module.exports = function api(app) {
    app.get('/archive', async (req, res) => {
        const drawings = await getArchivedDrawings();
        res.json(drawings);
    });

    return app;
}