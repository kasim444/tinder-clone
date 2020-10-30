import axios from 'axios';

const API = axios.create({
    baseURL: 'https://tinder-clone-hade.herokuapp.com'
});

export default API;
