import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalSearching from '../customer-pages/ModalSearching';
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import { UserContext } from '../customer-pages/login-pages/LoginGmail';


function Header() {
    // const user = useContext(UserContext);
    // console.log(user);
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
                            {/* {user ? (
                                <Navbar.Text className="justify-content-end">
                                    Welcome, {user.name} 
                                    <a onClick="" href="/">Logout</a>
                                </Navbar.Text>)
                                : 
                                (<Nav.Link><NavLink className="nav-link" to="/login">Đăng nhập</NavLink></Nav.Link>)
                            } */}

                            {/* <Nav.Link><NavLink className="nav-link" to="/login">Đăng nhập</NavLink></Nav.Link> */}

                            {/* <Image src="" style={{ marginRight: "15px", borderRadius: "50%", height: "50px", width: "50px" }} /> */}
                        </Nav>
                        <ModalSearching />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header