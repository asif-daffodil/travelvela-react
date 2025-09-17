import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://admin.travelvela.com/api',
  headers: {
    // Default to API key auth; will be overridden to Bearer when token is set
    Authorization: 'TravelVela-DYSBW7537NUDD7078',
    username: 'genesis',
    password: 'ERTYUIO87347854',
    Accept: 'application/json',
  },
});

export function setBearerToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  try { localStorage.setItem('auth_token', token); } catch { /* ignore */ }
  }
}

export function clearBearerToken() {
  api.defaults.headers.common.Authorization = 'TravelVela-DYSBW7537NUDD7078';
  try { localStorage.removeItem('auth_token'); } catch { /* ignore */ }
}

// Initialize from localStorage if available
try {
  const saved = localStorage.getItem('auth_token');
  if (saved) setBearerToken(saved);
} catch { /* ignore */ }
