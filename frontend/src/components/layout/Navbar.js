import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import '../../styles/App.css';
import store from "../../store";

const activeStyle = { color: "blue-text" };

function Navibar() {

    const isAuthenticated = store.getState().auth.isAuthenticated;

    let location = useLocation();

    useEffect(() => {
        store.subscribe(() => {
            if (this === undefined) return;
            this.setState({
                isAuthenticated: store.getState().auth.isAuthenticated
            });
        });
    }
    );

    return (
        <div>
            <Navbar sticky="top" className="z-depth-1300 nav-wrap" expand="lg">

                <Container className="white-text">
                    <Navbar.Brand
                        to="/"
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="brand-logo white-text"
                    >
                        <i className="material-icons">map</i>
                        JanWhere
                    </Navbar.Brand>
                    <Navbar.Toggle className="blue" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="white-text justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/' ? activeStyle.color : 'white-text')}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/discover" className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/discover' ? activeStyle.color : 'white-text')}>
                                Discover
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/about' ? activeStyle.color : 'white-text')}>
                                About Us
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/contact' ? activeStyle.color : 'white-text')}>
                                Contact Us
                            </Nav.Link>
                            {isAuthenticated ? (
                                <Nav.Link
                                    as={Link} to="/dashboard"
                                    className="btn waves-effect waves-light hoverable blue accent-3 white-text"
                                >
                                    Dashboard
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link
                                        as={Link} to="/login"
                                        className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/login' ? activeStyle.color : 'white-text')}
                                    >
                                        Log In
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link} to="/signup"
                                        className="btn waves-effect waves-light hoverable blue accent-3 white-text"
                                    >
                                        Sign Up
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navibar;
