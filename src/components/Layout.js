import { Outlet } from "react-router-dom";
import Nav from "./nav-components";
import React from "react";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
