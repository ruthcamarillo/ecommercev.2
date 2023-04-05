import React from "react";
import '../styles/footer.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


function Footer() {

    return (

        <div>

            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Shop Now</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div class="row">
                        ROOOT Copyright © 2022 ROOOT - All rights reserved || Designed By: Ruth Camarillo
                    </div>
                </div>
            </footer>
        </div>

    )

}

export default Footer;