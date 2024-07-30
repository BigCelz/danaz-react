import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css'

function Header() {
    return (
        <section id='header'>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className='navbrand'>
                     Danaz
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="#link">About Us</Nav.Link>
                            <Nav.Link className='nav-link' href="#link">Services</Nav.Link>
                            <Nav.Link className='nav-link' href="#link">Our Team</Nav.Link>
                            <Button className='nav-btn'>Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header