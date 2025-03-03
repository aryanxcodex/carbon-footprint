import React from 'react';
import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import TopNavbar from '../components/TopNavbar';

const MainLayout = ({ role }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* <TopNavbar /> */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default MainLayout;