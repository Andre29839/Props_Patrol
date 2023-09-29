import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'redux/registerReducers/registerSelector';

export const Balance = () => {
  const balance = useSelector(selectAuthData);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>
            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}
      {isTablet && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>

            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}

      {isMobile && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>

            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}
    </div>
  );
};

export default Balance;
