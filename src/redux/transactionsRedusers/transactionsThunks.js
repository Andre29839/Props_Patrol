import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionCategoriesRequest } from 'services/api/transactionCategoriesApi';
import {
  addTransactionsRequest,
  deleteTransactionsRequest,
  getTransactionsRequest,
  getTransactionsSummaryRequest,
  patchTransactionsRequest,
} from 'services/api/transactionsApi';

export const getTransactionsStatisticThunk = createAsyncThunk(
  'transactions/getTransactionsSummaryThunk',
  async (params, { rejectWithValue }) => {
    try {
      const transactionSummary = await getTransactionsSummaryRequest(params);
      return transactionSummary;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionCategoriesThunk = createAsyncThunk(
  'transactions/getTransactionCategoriesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const transactionCategories = await getTransactionCategoriesRequest();
      return transactionCategories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getTransactionsThunk = createAsyncThunk(
  'transactions/getTransactionsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await getTransactionsRequest();
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addTransactionsThunk = createAsyncThunk(
  'transactions/addTransactionsThunk',
  async (formData, { rejectWithValue }) => {
    try {
      const newTransaction = await addTransactionsRequest(formData);
      toast.success('Transaction completed successfully!');
      return newTransaction;
    } catch (error) {
      toast.error(`Transaction completed with error!`);
      return rejectWithValue(error.message);
    }
  }
);
export const patchTransactionsThunk = createAsyncThunk(
  'transactions/patchTransactionsThunk',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const editTransaction = await patchTransactionsRequest(id, updatedData);
      toast.success('Transaction edited successfully!');
      return editTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionsThunk = createAsyncThunk(
  'transactions/deleteTransactionsThunk',
  async (transactionId, { rejectWithValue }) => {
    try {
      const delTransaction = await deleteTransactionsRequest(transactionId);
      toast.success('Transaction deleted successfully!');
      return delTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
