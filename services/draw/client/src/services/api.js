import axios from 'axios';

const location = window.location;
const HOST = ((location) => {
    const isLocalDevelopment = location.port === '3000';
    if (isLocalDevelopment) {
        return `${location.hostname}:${8080}`;
    } else {
        return location.host;
    }
})(location);

export function getArchivedDrawings() {
    return axios({
        url: `${HOST}/api/archive`,
        method: 'GET'
    }).then(response => response.data);
}