import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className="bgColor" expand="lg">
                <Container>
                    <Navbar.Brand className="logo" href="#home">Watch Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className="mx-3 navlink" href="#home">Home</Nav.Link>
                            <Nav.Link className="mx-3 navlink" href="#link">About</Nav.Link>
                            <Nav.Link className="mx-3 navlink" href="#link">Inventory</Nav.Link>
                            <Nav.Link className="mx-3 navlink" href="#link">Sign In</Nav.Link>
                            <Nav.Link className="mx-3 navlink" href="#link">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;