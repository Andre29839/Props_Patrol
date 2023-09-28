import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import PublicRoute from './PublicRoutes/PublicRoutes';
import { Suspense, lazy } from 'react';
import { RedirectTo } from './RedirectTo/RedirectTo';

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" />
        </Route>
        <Route>
          <Route path="/home" element={<PrivateRoute></PrivateRoute>} />
          <Route path="/statistic" element={<PrivateRoute></PrivateRoute>} />
          <Route
            path="/currency"
            element={
              <RedirectTo
                component={<PrivateRoute></PrivateRoute>}
                redirectTo="/home"
              />
            }
          />
        </Route>
        <Route path="*" />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
