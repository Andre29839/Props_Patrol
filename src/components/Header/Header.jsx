import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
// import { selectIsModalLogOut } from 'redux/globalReducers/globalSelectors';
import { openModalLogout } from 'redux/globalReducers/globalSlice';
import moneylogo from '../../images/logo.svg';
import { LogoExit, WrapBtn, WrapHeader, HeaderStyled } from './Header.styled';
import { selectAuthData } from 'redux/registerReducers/registerSelector';

const Header = () => {
  const name = useSelector(selectAuthData);
  // const isModalShow = useSelector(selectIsModalLogOut);
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(openModalLogout());
  };

  return (
    <>
      <HeaderStyled>
        <WrapHeader>
          <img src={moneylogo} alt="MoneyGuard_Logo" />
          <p>Money Guard</p>
        </WrapHeader>
        <WrapBtn>
          <span>{name.username}</span>
          <LogoExit />
          <button onClick={handleLogout}>{isMobilesize ? '' : 'Exit'}</button>
        </WrapBtn>
      </HeaderStyled>
    </>
  );
};

export default Header;
