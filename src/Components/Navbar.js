import React from "react";
import '../App.css';
import logo from "../Images/logo2.png";
import { Link } from "react-router-dom"; // needed for Blog link

function Navbar() {
  return (
    <div style={{ fontFamily: 'Megante' }} className="navbar">
      <hr />
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li><a href="#intro">HOME</a></li>
        <li><a href="#Categories">RECIPES</a></li>
        <li><Link to="/blog">BLOG</Link></li> {/* separate page */}
        <li><a href="#feedback">FEEDBACK</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
