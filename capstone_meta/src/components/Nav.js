import React from "react";
import logo from "../assets/Logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
