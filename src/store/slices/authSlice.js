import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/apiClient';

// Helpers to persist auth state
const STORAGE_KEY = 'auth';
const canUseStorage = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
const loadPersisted = () => {
  if (!canUseStorage) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return {
      token: data.token ?? null,
      image: data.image ?? null,
      name: data.name ?? null,
      email: data.email ?? null,
      contact: data.contact ?? null,
      email_verified_at: data.email_verified_at ?? null,
      isAuthenticated: Boolean(data.token || data.email) || false,
      status: 'idle',
      error: null,
    };
  } catch {
    return null;
  }
};
const savePersisted = (data) => {
  if (!canUseStorage) return;
  try {
    const toSave = {
      token: data.token ?? null,
      image: data.image ?? null,
      name: data.name ?? null,
      email: data.email ?? null,
      contact: data.contact ?? null,
      email_verified_at: data.email_verified_at ?? null,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // ignore JSON/Storage errors when loading persisted auth
  }
};
const clearPersisted = () => {
  if (!canUseStorage) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore Storage errors when saving persisted auth
  }
};

const DEFAULT_STATE = {
  token: null,
  image: null,
  name: null,
  email: null,
  contact: null,
  email_verified_at: null,
  isAuthenticated: false,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};
const initialState = loadPersisted() || DEFAULT_STATE;

// Async thunk to check auth status from API
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState()?.auth?.token;
      const res = await api.get('/user', {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      return res.data; // expect { success, data, message }
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message || 'Network error');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, image, name, email, contact, email_verified_at } = action.payload || {};
      state.token = token ?? null;
      state.image = image ?? null;
      state.name = name ?? null;
      state.email = email ?? null;
      state.contact = contact ?? null;
      state.email_verified_at = email_verified_at ?? null;
      state.isAuthenticated = Boolean(token || email);
      savePersisted({ token, image, name, email, contact, email_verified_at });
    },
    clearUser: (state) => {
      state.token = null;
      state.image = null;
      state.name = null;
      state.email = null;
      state.contact = null;
      state.email_verified_at = null;
      state.isAuthenticated = false;
      clearPersisted();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { success, data } = action.payload || {};
        if (success && data) {
          state.token = data.token ?? null;
          state.image = data.image ?? null;
          state.name = data.name ?? null;
          state.email = data.email ?? null;
          state.contact = data.contact ?? null;
          state.email_verified_at = data.email_verified_at ?? null;
          state.isAuthenticated = true;
          savePersisted({
            token: state.token,
            image: state.image,
            name: state.name,
            email: state.email,
            contact: state.contact,
            email_verified_at: state.email_verified_at,
          });
        } else {
          state.isAuthenticated = false;
          state.token = null;
          state.image = null;
          state.name = null;
          state.email = null;
          state.contact = null;
          state.email_verified_at = null;
          clearPersisted();
        }
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Auth check failed';
        state.isAuthenticated = false;
        clearPersisted();
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
