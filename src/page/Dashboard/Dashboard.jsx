import Balance from 'components/Balance/Balance';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Balance />
      <Outlet />
    </>
  );
};

export default Dashboard;
