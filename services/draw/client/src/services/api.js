import axios from 'axios';

const location = window.location;
const isLocalDevelopment = location.hostname === 'localhost';
const HOST = isLocalDevelopment ? 'http://localhost:8080' : '';

export function getArchivedDrawings() {
    return axios({
        url: `${HOST}/api/archive`,
        method: 'GET'
    }).then(response => response.data);
}