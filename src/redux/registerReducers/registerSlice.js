import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshAuthThunk,
  refreshBalanceThunk,
  registerThunk,
} from './registerThunks';
import { addTransactionsThunk } from 'redux/transactionsRedusers/transactionsThunks';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  userData: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      //--------------------------- Register -----------------------------
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(registerThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })
      //----------------------------- User Log In -----------------------------

      .addCase(logInThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logInThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })
      //----------------------------- User Log Out -----------------------------
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logOutThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })
      //----------------------------- Refresh User -----------------------------
      .addCase(refreshAuthThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshAuthThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isLogin = true;
      })
      .addCase(refreshAuthThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })
      //----------------------------- Refresh balance after add -----------------------------
      .addCase(addTransactionsThunk.fulfilled, (state, action) => {
        state.userData.balance = action.payload.balanceAfter;
      })
      //----------------------------- Refresh balance after edit/delete transaction  -----------------------------
      .addCase(refreshBalanceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.balance = action.payload.balance;
      }),
});

export const authReducer = authSlice.reducer;
