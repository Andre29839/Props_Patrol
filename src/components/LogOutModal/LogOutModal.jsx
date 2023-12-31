import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModalLogout } from 'redux/globalReducers/globalSlice';
import { logOutThunk } from 'redux/registerReducers/registerThunks';
import Button from 'components/Button/Button';
import moneylogo from '../../images/logo.svg';
import {
  BackdropLogOut,
  BtnWrapper,
  ModalLogOut,
  WrapLogo,
} from './LogOutModal.styled';
import { toast } from 'react-toastify';

const ModalLogout = ({ closeReducer }) => {
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

  const handlerLogout = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
    toast.success(
      `You have successfully logged out. We hope to see you back soon!`
    );
  };

  return (
    <BackdropLogOut onClick={onCloseModal}>
      <ModalLogOut>
        <WrapLogo>
          <img src={moneylogo} alt="MoneyGuard Logo" />
          <h3>Money Guard</h3>
        </WrapLogo>
        <p>Are you sure you want to log out?</p>
        <BtnWrapper>
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
        </BtnWrapper>
      </ModalLogOut>
    </BackdropLogOut>
  );
};

export default ModalLogout;
