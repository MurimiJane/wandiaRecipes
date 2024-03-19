import React from "react";
import '../App.css';
import logo from "../Images/logo2.png"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div style={{ fontFamily: 'Megante' }} className="navbar">

            <hr></hr>
            <img src={logo} className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/section2">My Recipes</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/section3">Feedback</Link></li>
                <li><Link to="/section4">Contact me</Link></li>
            </ul>
        </div>
    )
}

export default NavBar