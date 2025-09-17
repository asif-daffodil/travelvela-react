import { api } from './apiClient';

/**
 * Checks if the user is logged in by calling GET /user
 * Returns { loggedIn: boolean, data?: object, error?: string }
 */
export async function checkLoggedIn() {
  try {
    const res = await api.get('/user');
    const { success, data, message } = res.data || {};

    if (success) {
      return { loggedIn: true, data };
    }
    return { loggedIn: false, error: message || 'Not authenticated' };
  } catch (err) {
    return {
      loggedIn: false,
      error: err?.response?.data?.message || err.message || 'Network error',
    };
  }
}
