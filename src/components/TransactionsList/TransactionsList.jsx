import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransactionsThunk,
  getTransactionsThunk,
} from '../../redux/transactionsRedusers/transactionsThunks';
import { Button } from 'shared/Button/Button';
import { refreshBalanceThunk } from 'redux/registerReducers/registerThunks';
 import {selectAllTransactions,selectTransactionsCategories} from '../../redux/transactionsRedusers/transactionsSelectors';

const TransactionsList = () => {
  const transactions = useSelector(selectAllTransactions);
  const dispatch = useDispatch();

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const handleDelete = transactionId => {
    dispatch(deleteTransactionsThunk(transactionId))
      .unwrap()
      .then(() => dispatch(getTransactionsThunk()))
      .then(() => dispatch(refreshBalanceThunk()));
  };

  const transactionSymbol = type =>
    type === 'INCOME' ? '+' : type === 'EXPENSE' ? '-' : '';

  const categoryNames = {
    'c9d9e447-1b83-4238-8712-edc77b18b739': 'Main expenses',
    '27eb4b75-9a42-4991-a802-4aefe21ac3ce': 'Products',
    '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386': 'Car',
    'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4': 'Self care',
    '76cc875a-3b43-4eae-8fdb-f76633821a34': 'Child care',
    '128673b5-2f9a-46ae-a428-ec48cf1effa1': 'Household products',
    '1272fcc4-d59f-462d-ad33-a85a075e5581': 'Education',
    'c143130f-7d1e-4011-90a4-54766d4e308e': 'Leisure',
    '719626f1-9d23-4e99-84f5-289024e437a8': 'Other expenses',
    '3acd0ecd-5295-4d54-8e7c-d3908f4d0402': 'Entertainment',
    '063f1132-ba5d-42b4-951d-44011ca46262': 'Income',
  };

  if (transactions.length === 0) {
    return <p>No transactions available.</p>;
  }

  return (
    <>
      <ul>
        {transactions.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <li key={id}>
              <p>{formatDate(transactionDate)}</p>
              <p>{transactionSymbol(type)}</p>
              <p>{categoryNames[categoryId]}</p>
              <p>{comment}</p>
              <p className={type === 'INCOME' ? 'income' : 'expense'}>
                {(amount >= 0 ? '' : '-') + Math.abs(amount).toFixed(2)}
              </p>
              <button>edit</button>
              <Button onClick={() => handleDelete(id)}>delete</Button>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default TransactionsList;
