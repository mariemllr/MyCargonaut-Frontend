import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
