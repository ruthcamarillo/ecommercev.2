import React from 'react';
import SlideShow from '../components/SlideShow';
import '../styles/slide-show.css';
import { BrowserRouter, Route, Link } from "react-router-dom";




function Home() {

    return (
        <div>
            <SlideShow />
            <div className="mainhome">

                <div className="homediv">

                    <h2 > Find a Fragrance Today! </h2>
                    <p> We want to help you find your signature sent today!</p>
                    <div className="buttonhome">
                        <button className="button2" > <a> <Link to="/products">Shop Now </Link> </a> </button>
                        <button className="button2"> <a> <Link to="/contact">Contact Us </Link> </a> </button>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;