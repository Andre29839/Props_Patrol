import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';

export const RedirectTo = ({ component: Component, redirectTo = '/' }) => {
  const isMobile = useMediaQuery({ maxWidth: 767.9 });
  return isMobile ? Component : <Navigate to={redirectTo} />;
};
