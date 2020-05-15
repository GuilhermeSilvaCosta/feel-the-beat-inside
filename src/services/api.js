import axios from 'axios';

const bodyFormData = new FormData();
bodyFormData.append('grant_type', 'client_credentials');

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
});

export default api;
