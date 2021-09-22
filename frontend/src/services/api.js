import axios from 'axios';

const api = axios.create({
    baseURL: 'https://expoIP:3333/'
});

export default api;