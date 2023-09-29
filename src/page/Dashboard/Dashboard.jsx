import Header from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';

import React from 'react';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from 'page/Dashboard/Dashboard.styled';

function DashboardPage() {
  return (
    <div>
      <Header />
      <Box>
        <SideBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </div>
  );
}

export default DashboardPage;
