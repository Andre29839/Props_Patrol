import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  closeModalLogout,
  openModalLogout,
} from 'redux/globalReducers/globalSlice';
import moneylogo from '../../images/logo.svg';
import { LogoExit, WrapBtn, WrapHeader, HeaderStyled } from './Header.styled';
import { selectAuthData } from 'redux/registerReducers/registerSelector';
import ModalLogout from 'components/LogOutModal/LogOutModal';
import { selectIsModalLogOut } from 'redux/globalReducers/globalSelectors';

const Header = () => {
  const userData = useSelector(selectAuthData);
  const isModalShow = useSelector(selectIsModalLogOut);
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
          <span>{userData?.username}</span>
          <button onClick={handleLogout}>
            <LogoExit />
            {isMobilesize ? '' : 'Exit'}
          </button>
        </WrapBtn>
      </HeaderStyled>
      {isModalShow && (
        <ModalLogout closeReducer={() => dispatch(closeModalLogout())} />
      )}
    </>
  );
};

export default Header;
