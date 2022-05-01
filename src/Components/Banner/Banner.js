import React from 'react';
import { Carousel } from 'react-bootstrap';
import watch1 from '../../images/watch1.jpg'
import watch2 from '../../images/watch2.jpg'
import watch3 from '../../images/watch3.jpg'
const Banner = () => {
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src={ watch1 }
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="sliderHeading">Welcome to watch warehouse</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src={ watch2 }
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="sliderHeading">We store diffent types of watch</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src={ watch3 }
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="sliderHeading">We have a big inventory</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;