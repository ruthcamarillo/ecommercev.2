import React from "react";
// import images from './images'
// import slides from './slides';
import '../styles/slide-show.css';
import Slides from './DemoCarousel'
function SlideShow() {

    return (
        <div>
            <div className="mySlides">
                <Slides />
            </div>
            <h1 className="title__home"> ROOOT </h1>
            <h4 className="subtitle__home"> ~ The fragrance destination ~</h4>

        </div>
    )
}


export default SlideShow;