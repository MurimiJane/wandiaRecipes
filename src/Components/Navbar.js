import React from "react";
import '../App.css';
import logo from "../Images/logo2.png"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">

            <hr></hr>
            <img src={logo} className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>My Recipes</li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/blog">Feedback</Link></li>
                <li><Link to="/contact">Contact me</Link></li>
            </ul>
        </div>
    )
}

export default NavBar