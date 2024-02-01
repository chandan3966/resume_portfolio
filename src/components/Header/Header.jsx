import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function  Header({text,bgColor, color}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: color
    }
  return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Chandan's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <p className='sub_heading'></p>
                </Nav>

                <Nav variant="underline" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link className="nav-link" as={Link} to="/home">AboutMe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link" as={Link} to="/resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link" as={Link} to="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

Header.defaultProps = {
    text: "Feedback App",
    bgColor: 'rgba(0,0,0,0.4)',
    color:'#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}
export default Header
