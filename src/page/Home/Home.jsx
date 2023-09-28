import TransactionsList from 'components/TransactionsList/TransactionsList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsRedusers/transactionsThunks';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategoriesThunk());
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <section>
      <div>
        <div>
          <p>Date</p>
          <p>Type</p>
          <p>Category</p>
          <p>Comment</p>
          <p>Sum</p>
        </div>
        <TransactionsList />
      </div>
    </section>
  );
};

export default Home;
