import React from "react";
import './slider.css';
import Carousel from "react-bootstrap/Carousel";

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

const Slider = () => {

    return (
        <div className="divContSlider">
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={image5}
                        alt="image5"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={image6}
                        alt="image6"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="image1"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="image2"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="image3"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="image4"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Slider;  
