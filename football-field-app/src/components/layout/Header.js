import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalSearching from '../customer-pages/ModalSearching';
import { NavLink } from 'react-router-dom'

function Header(props) {
    const { username, onLogout, isSubmitted } = props;
    console.log(username)
    return (
        <>
            <Navbar className='mb-1' bg="light" expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="../assets/images/logo.jpg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        Football Field</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><NavLink className="nav-link" to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="nav-link" to="/about">About</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="nav-link" to="/contact">Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="nav-link" to="/action">Đặt sân</NavLink></Nav.Link>
                            {isSubmitted ? (username && (
                                <Navbar.Text className="justify-content-end">
                                    Welcome, {username} <a href="/" onClick={onLogout}>Logout</a>
                                </Navbar.Text>))
                                : (<Nav.Link><NavLink className="nav-link" to="/login">Đăng nhập</NavLink></Nav.Link>)
                            }
                            
                            {/* <Nav.Link><NavLink className="nav-link" to="/login">Đăng nhập</NavLink></Nav.Link> */}
                        </Nav>
                        <ModalSearching />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header