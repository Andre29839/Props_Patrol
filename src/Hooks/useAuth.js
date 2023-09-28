import { useSelector } from 'react-redux';
import { isLogin } from '../redux/registerReducers/registerSelector';

const UseAuth = () => {
  const isAuth = useSelector(isLogin);

  return isAuth;
};

export default UseAuth;
