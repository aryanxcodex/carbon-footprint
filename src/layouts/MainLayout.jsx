import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ role }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
