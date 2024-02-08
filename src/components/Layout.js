import { Outlet } from "react-router-dom";
import Nav from "./nav-components";
import Footer from "./footer-components";
import React from "react";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
