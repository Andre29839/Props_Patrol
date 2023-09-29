import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
// import { selectIsModalLogOut } from 'redux/globalReducers/globalSelectors';
import { openModalLogout } from 'redux/globalReducers/globalSlice';
import moneylogo from '../../images/logo.svg';
import { IoExitOutline } from 'react-icons/io5';

const Header = () => {
  // const isModalShow = useSelector(selectIsModalLogOut);
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(openModalLogout());
  };

  return (
    <>
      <header>
        <div>
          <img src={moneylogo} alt="MoneyGuard Logo" />
          <p>Money Guard</p>
        </div>
        <div>
          <span>Name</span>
          <IoExitOutline />
          <button onClick={handleLogout}>{isMobilesize ? '' : 'Exit'}</button>
        </div>
      </header>
    </>
  );
};

export default Header;
