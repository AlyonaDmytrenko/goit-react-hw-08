import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

// Установка токена в заголовок Authorization
const setAuthHeader = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Видалення токена із заголовка Authorization
const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = '';
};

// 📌 Реєстрація користувача
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/signup', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 📌 Логін користувача
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/login', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 📌 Вихід користувача
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitAPI.post('/users/logout');
      removeAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 📌 Оновлення даних користувача за токеном
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token is not exist');
    }

    try {
      setAuthHeader(savedToken);
      const response = await goitAPI.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
