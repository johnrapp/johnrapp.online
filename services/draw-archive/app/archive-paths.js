const path = require('path');

const archiveDir = '/usr/data';

const drawingsPath = path.join(archiveDir, 'drawings.json');
const idPath = path.join(archiveDir, 'id.number');

module.exports = {
    drawingsPath,
    idPath    
};
