import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Avatar from "../assets/avatar-icon.png";

function fakeLogOut(e) {
  e.preventDefault();
  localStorage.removeItem("loggedIn");
  window.location.reload();
}

function Navbar() {
  const myStyle = {
    textDecoration: "underline",
  };
  return (
    <nav>
      <div className="logo-side">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="right-side">
        <NavLink
          // className={({ isActive }) => {
          //   return isActive ? "activeLink" : "";
          // }}
          to="/host"
          // style={{ marginRight: "10px" }}
          style={({ isActive }) => (isActive ? myStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : null)}
          to="/about"
          // style={{ marginRight: "10px" }}
          style={({ isActive }) => (isActive ? myStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : null)}
          style={({ isActive }) => (isActive ? myStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login">
          <img src={Avatar} style={{ width: "18px" }} />
        </Link>
        <button
          onClick={(event) => {
            fakeLogOut(event);
          }}
        >
          X
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
