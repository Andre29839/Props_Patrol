import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/registerReducers/registerSelector';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
