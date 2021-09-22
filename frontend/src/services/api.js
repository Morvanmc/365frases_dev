import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frases365.herokuapp.com/'
});

export default api;