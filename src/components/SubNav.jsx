import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/vandetail.css";

function SubNav() {
  const myActive = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="subnav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? myActive : null)}
          to="."
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? myActive : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? myActive : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </div>
      {/* <Outlet /> */}
    </>
  );
}

export default SubNav;
