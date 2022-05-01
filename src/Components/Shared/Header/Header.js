import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/">Home</Nav.Link>
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/about">About</Nav.Link>
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/inventory">Inventory</Nav.Link>
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/signin">Sign In</Nav.Link>
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;