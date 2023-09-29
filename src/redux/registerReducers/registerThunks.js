import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInRequest,
  logOutRequest,
  registerRequest,
  setToken,
} from 'services/api/authControlerApi';
import { getUsersCurrentDataRequest } from 'services/api/usersCurrentControllerApi';

export const registerThunk = createAsyncThunk(
  'auth/registerThunk',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await registerRequest(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logInThunk = createAsyncThunk(
  'auth/logInThunk',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await logInRequest(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOutThunk',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshAuthThunk = createAsyncThunk(
  'auth/refreshAuthThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);

      const data = await getUsersCurrentDataRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshBalanceThunk = createAsyncThunk(
  'auth/refreshBalanceThunk',
  async (_, thunkAPI) => {
    try {
      const data = await getUsersCurrentDataRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
