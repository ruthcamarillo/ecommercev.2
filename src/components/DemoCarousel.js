import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {

    render() {

        return (
            <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="./images/green.jpg" alt="perfume bottle"></img>

                </div>
                <div>
                    <img src="./images/blu.jpg" alt="perfume bottle"></img>

                </div>
                <div>
                    <img src="./images/wat.jpg" alt="perfume bottle"></img>

                </div>
            </Carousel>
        );

    }
};
export default DemoCarousel;
//infiniteLoop={true} showThumbs={false}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


