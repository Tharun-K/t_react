import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "./reactimg1.svg";
import img2 from "./reactimg2.jpg"
import img3 from "./reactimg3.jpg";
class DemoCarousel extends Component {
    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Carousel width={"100%"} >
                <div>
                    <img src={img1} /> 
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        )
    }
};
export default DemoCarousel