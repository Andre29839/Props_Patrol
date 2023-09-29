import React, { useEffect } from 'react';
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
    </div>
  );
}

export default App;
