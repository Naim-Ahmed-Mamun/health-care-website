import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../img/logo.png';

const Header = () => {
    // change header state
    const [sticky,setSticky] = useState(false);

    const handleStickyHeader = () => {
        if(window.scrollY > 50){
            setSticky(true)
        }
        else{
            setSticky(false);
        }
    };
    window.addEventListener("scroll",handleStickyHeader)
    return (
        <>
            <div className={sticky ? "navBar_sticky navBar_container" :"navBar_container"}>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto nav_menu">
                                <NavLink className="nav_link" to="/home">Home</NavLink>
                                <NavLink className="nav_link" to="/about">About US</NavLink>
                                <NavLink className="nav_link" to="/services">Services</NavLink>
                                <NavLink className="nav_link" to="/contact">Contact Us</NavLink>
                            </Nav>
                            <button className="regular_btn">Login</button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;