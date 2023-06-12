import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      {" "}
      <Navbar />
      <Outlet />
      <Footer />
      {/* <h1>This is the Layout</h1> */}
    </div>
  );
}

export default Layout;
