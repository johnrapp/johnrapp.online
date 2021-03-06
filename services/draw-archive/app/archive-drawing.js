const fs = require('fs');

const getArchivedDrawings = require('./archived-drawings');
const { drawingsPath, idPath } = require('./archive-paths');

module.exports = function archiveDrawing(drawing, name) {
    let archivedDrawings = getArchivedDrawings();
    let prevId;
    try {
        const idContents = fs.readFileSync(idPath, 'utf8');
        prevId = parseInt(idContents, 10);
    } catch(e) {
        prevId = -1;
    }

    const id = prevId + 1;
    archivedDrawings.unshift(archivedDrawing(id, drawing, name));

    try {
        fs.writeFileSync(drawingsPath, JSON.stringify(archivedDrawings));
        fs.writeFileSync(idPath, id.toString(), 'utf8');
        return { success: true, id };
    } catch(e) {
        return { error: e };
    }
};

const archivedDrawing = (id, drawing, name) => ({
    id,
    drawing,
    name,
    date: Date.now()
});