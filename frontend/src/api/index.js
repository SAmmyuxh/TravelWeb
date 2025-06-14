import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api`,
});

export const fetchDestinations = () => API.get('/destinations');
export const fetchTopPackages = () => API.get('/packages/top-selling');
