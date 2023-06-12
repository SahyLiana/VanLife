import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/host.css";

function Host() {
  const myStyle = {
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? myStyle : null)}
          // to="/host"
          to="." //go to the current directory
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? myStyle : null)}
          // to="/host/income"
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? myStyle : null)}
          // to="/host/vans"
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? myStyle : null)}
          // to="/host/review"
          to="review"
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Host;
