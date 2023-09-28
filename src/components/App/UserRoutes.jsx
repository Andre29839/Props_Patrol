import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import PublicRoute from './PublicRoutes/PublicRoutes';
import RedirectTo from './RedirectTo/RedirectTo';
import Loader from 'components/Loader/Loader';
import Home from 'page/Home/Home';

const LogIn = lazy(() => import('../../page/LogIn/LogIn'));
const Register = lazy(() => import('../../page/Register/Register'));
const NotPage = lazy(() => import('../../page/NotPage/NotPage'));
const Dashboard = lazy(() => import('../../page/Dashboard/Dashboard'));
const Currency = lazy(() => import('../../page/Currency/Currency'));
const Statistics = lazy(() => import('../../page/Statistics/Statistics'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Dashboard />}>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistic"
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route
            path="/currency"
            element={
              <RedirectTo
                component={
                  <PrivateRoute>
                    <Currency />
                  </PrivateRoute>
                }
                redirectTo="/home"
              />
            }
          />
        </Route>
        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
