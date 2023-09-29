import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModalLogout } from 'redux/globalReducers/globalSlice';
import { logOutThunk } from 'redux/registerReducers/registerThunks';
import { Button } from 'shared/Button/Button';
import moneylogo from '../../images/logo.svg';
import {
  BackdropLogOut,
  CancelSvg,
  ModalLogOut,
  WrapLogo,
} from './LogOutModal.styled';

export const ModalLogout = ({ closeReducer }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseModalEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeReducer());
      }
    };

    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [closeReducer, dispatch]);

  const onCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeReducer());
    }
  };
  const handleCloseModal = () => {
    dispatch(closeReducer());
  };
  const handlerLogout = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
  };

  return (
    <BackdropLogOut onClick={onCloseModal}>
      <ModalLogOut>
        <button onClick={handleCloseModal}>
          <CancelSvg />
        </button>
        <WrapLogo>
          <img src={moneylogo} alt="MoneyGuard Logo" />
          <h3>Money Guard</h3>
        </WrapLogo>
        <p>Are you sure you want to log out?</p>
        <Button
          type="button"
          onClick={handlerLogout}
          variant="primary"
          text="Logout"
        />
        <Button
          type="button"
          onClick={() => dispatch(closeModalLogout())}
          variant="secondary"
          text="Cancel"
        />
      </ModalLogOut>
    </BackdropLogOut>
  );
};
