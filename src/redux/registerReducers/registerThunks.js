import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInRequest,
  logOutRequest,
  registerRequest,
  setToken,
} from 'services/api/authControlerApi';
import { getUsersCurrentDataRequest } from 'services/api/usersCurrentControllerApi';

const notifySuccess = text =>
  toast.success(text, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });

const notifyError = text => {
  toast.error(text, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
};

export const registerThunk = createAsyncThunk(
  'auth/registerThunk',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await registerRequest(formData);
      notifySuccess('Registration is success!');
      return data;
    } catch (error) {
      notifyError('This email address already exists');
      return rejectWithValue(error.message);
    }
  }
);
export const logInThunk = createAsyncThunk(
  'auth/logInThunk',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await logInRequest(formData);
      notifySuccess('Welcome!');
      return data;
    } catch (error) {
      notifyError(`Email does not exist or password is incorrect`);
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
