import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import bell from '../images/bell.png';
import down from '../images/down.png';
import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <Navbar bg="none" expand="lg" className="pt-3">
        <Navbar.Brand href="#home">
            <img src={logo} alt="travel-wiser"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a className="nav-link mr-2" href="#home">Service</a>
            <a className="nav-link mr-2" href="#!">Find Destination</a>
            <a className="nav-link mr-2" href="#!">Blog</a>
            <a className="nav-link mr-2" href="#!">Community <img src={down} alt=""/> </a>
            <a className="nav-link mr-2" href="#!">
                <img src={bell} alt="bell"/>
            </a>
            <a className="nav-link mr-2" href="#!">John Smith <img src={down} alt="John Smith"/> </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;