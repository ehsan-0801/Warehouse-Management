import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import watch1 from '../../../images/watch1.jpg'
import watch2 from '../../../images/watch2.jpg'
import watch3 from '../../../images/watch3.jpg'
const Header = () => {
    return (
        <div>
            <Navbar className="bgColor" expand="lg">
                <Container>
                    <Navbar.Brand className="text-light navlink" href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className="text-light navlink" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-light navlink" href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={ watch1 }
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="sliderHeading">First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={ watch2 }
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="sliderHeading">Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={ watch3 }
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="sliderHeading">Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;