import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/registerReducers/registerSelector';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
