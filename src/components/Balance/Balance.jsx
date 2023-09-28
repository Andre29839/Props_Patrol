import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthData } from '../../redux/registerReducers/registerSelector';

const Balance = () => {
  const balance = useSelector(selectAuthData);
  return (
    <div>
      <p>Your balance</p>
      <div>
        <span>₴</span>

        <p>{balance}</p>
      </div>
    </div>
  );
};

export default Balance;
