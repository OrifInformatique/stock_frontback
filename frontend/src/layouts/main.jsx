import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../modules/header';

const MainLayout = () => {
  return (<>
      <Header />
      <div className="m-4">
        <Outlet />
      </div>
  </>)
}

export default MainLayout;