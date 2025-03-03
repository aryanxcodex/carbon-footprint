import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ role }) => {
  return (
    <div className="flex">
      <div className="flex-1">
      <Header />
      <Outlet /> 
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
