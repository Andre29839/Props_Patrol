import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthThunk } from 'redux/registerReducers/registerThunks';
import UserRoutes from './UserRoutes';
import {
  selectIsLogin,
  selectToken,
} from 'redux/registerReducers/registerSelector';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!isLogin && token) {
      dispatch(refreshAuthThunk());
    }
  }, [dispatch, isLogin, token]);

  return (
    <div>
      <UserRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
