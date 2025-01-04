import axios from 'axios'
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API || 'http://localhost:3333',
    timeout: 10000,
})