import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  error: null, // опціонально для відображення помилок
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // Register
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })

      // Login
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })

      // Refresh
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || action.error.message;
      })

      // Logout
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { email: null, name: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
