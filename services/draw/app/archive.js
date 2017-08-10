const rp = require('request-promise-native');
const archiveServiceUrl = 'http://draw-archive';

module.exports = {
    archiveDrawing: async (drawing, name) => {
        try {
            const response = await rp({
                url: `${archiveServiceUrl}/`,
                method: 'POST',
                body: { drawing, name },
                json: true
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    getArchivedDrawings: async () => {
        try {
            const response = await rp({
                url: `${archiveServiceUrl}/`,
                method: 'GET',
                json: true
            });
            return response;
        } catch (error) {
            return [];
        }
    }
};