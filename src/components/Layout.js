import { Outlet } from "react-router-dom";
import Nav from "./Nav-components";
import Footer from "./Footer-components";
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
