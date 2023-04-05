import React from "react";
import '../styles/nav.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (


        <nav className="nav">
            <ul>

                <li class="nav-item"> <a> <Link to="/">Home</Link> </a></li>

                <li class="nav-item"> <a><Link to="/products">Shop Now</Link> </a> </li>

                <li class="nav-item"> <a> <Link to="/contact">Contact Us</Link> </a> </li>
            </ul>
        </nav>




    );
}

export default Navbar;