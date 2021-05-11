import React from 'react';
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../../images/msoftlogo.png';
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        <>
            <Navbar className="navBackground" fixed="top" expand="lg">
                <Container>
                    <Link to="/"><Navbar.Brand>  <img src={logo} alt=""/> </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto"> </Nav>
                        <Nav>
                            <Link exact activeStyle={{color:'#28A745'}} className="navItem" to="/">Home</Link>
                            <Link  className="navItem" to="/about">About</Link>
                            <Link  className="navItem" to="/service">Services</Link>
                            <Link  className="navItem" to="/admin">Dashboard</Link>
                            <Link  className="navItem" to="/reviews">Testimonial</Link>
                            <Link  className="navItem" to="/noMatch">Contact</Link>
                        </Nav>
                        <Link to="/login"> <Button variant="success">Login</Button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopNavigation;