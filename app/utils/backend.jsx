import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nise.co/api', // Change as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
