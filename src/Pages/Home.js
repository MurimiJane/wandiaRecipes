import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footerm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function Home() {
  
            return (
                <div style={{ fontFamily: 'Megante' }} className="App">
                    <div className="section1">
                        <Navbar />

                        <div className="intro">
                            <h1 style={{ fontFamily: 'Megante' }}>COOK
                                <br>
                                </br> WITH WANDIA</h1>

    
                        </div>

                    </div>

                    <div className="Section2" id="Categories">

                        <div className="categories">
                            <h1>Recipes by categories</h1>
                            <div className="containers">
                                <div className="container1">
                                    <h2><Link to="/salads">Salads</Link></h2>
                                </div>

                                <div className="container2">
                                    <h2><Link to="/Simplemeals">Simple meals</Link></h2>
                                </div>

                                <div className="container3">
                                    <h3><Link to="/chickenmeals">Chicken</Link></h3>
                                </div>

                                <div className="container4">
                                    <h2><Link to="/coffee">Coffee</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

        
                    <div className="section3">
                    <h2>Feedback</h2>
                    <p>Feedback will appear here</p>
               
                    </div>

                    <div className="section4">

                        <Footer />

                    </div>
                </div>
            )
        
}

export default Home
