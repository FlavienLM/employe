import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.181.169.48:80',
    //baseURL: 'http://localhost:8080',
});

export default api;