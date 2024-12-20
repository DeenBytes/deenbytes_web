import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:2100/',
  timeout: 25000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const apiJson = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:2100/',
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
});
let auth = localStorage?.getItem('auth') ? JSON.parse(localStorage?.getItem('auth')) : null;

export const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:2100/',
  // timeout: 25000,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: auth ? `Bearer ${auth.token}` : null, 
  },
});
export const apiJsonAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:2100/',
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: auth ? `Bearer ${auth.token}` : null, 
  },
});