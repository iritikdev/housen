import React from "react";
import logo from "/logo.svg";
function Navbar() {
  return (
    <header className="header">
      <a href="" className="logo">
        <img src={"/logo.svg"} alt="" />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#work">Buy a House</a>
        </li>
        <li>
          <a href="#about">Rent a House</a>
        </li>
        <li>
          <a href="#careers">Mortgage</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
