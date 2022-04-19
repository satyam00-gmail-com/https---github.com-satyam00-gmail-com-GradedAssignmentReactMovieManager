import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/Movies-in-Theaters" as={NavLink}>Movies in Theaters</Nav.Link>
                    <Nav.Link to="/Coming-Soon" as={NavLink}>Coming Soon</Nav.Link>
                    <Nav.Link to="/Top-Rated-Indian" as={NavLink}>Top Rated Indian</Nav.Link>
                    <Nav.Link to="/Top-Rated-Movies" as={NavLink}>Top Rated Movies</Nav.Link>
                    <Nav.Link to="/Favourites" as={NavLink}>Favourites</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;