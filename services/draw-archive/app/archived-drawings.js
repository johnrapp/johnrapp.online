const fs = require('fs');
const { drawingsPath } = require('./archive-paths');

module.exports = function getArchivedDrawings() {
    try {
        const archivedContents = fs.readFileSync(drawingsPath);
        return JSON.parse(archivedContents);
    } catch(e) {
        return [];
    }
};