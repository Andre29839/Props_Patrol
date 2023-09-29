import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsRedusers/transactionsThunks';
import TransactionsList from 'components/TransactionsList/TransactionsList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategoriesThunk());
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <section>
      <div>
        <TransactionsList />
      </div>
    </section>
  );
};

export default Home;
