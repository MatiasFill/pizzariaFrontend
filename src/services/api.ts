import axios from 'axios'
export const api = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: 10000,
  });
  



/*export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
}) */