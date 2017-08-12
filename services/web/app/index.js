const path = require('path');
const versions = require('./versions');

const publicDir = path.join(__dirname, 'public');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json('hej!')
    });

    versions.forEach(version => {
        
    });
}
