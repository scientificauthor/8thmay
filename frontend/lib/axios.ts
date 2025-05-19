// lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI+'api', // Base path for your API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
