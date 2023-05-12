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
            <Navbar className="z-depth-1300 nav-wrap" expand="lg">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

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
                        <Nav.Link href="/"  className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/' ? activeStyle.color : 'white-text')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href={'/discover'} className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/discover' ? activeStyle.color : 'white-text')}>
                            Discover
                        </Nav.Link>
                        <Nav.Link href={'/about'} className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/about' ? activeStyle.color : 'white-text')}>
                            About Us
                        </Nav.Link>
                        <Nav.Link href={'/contact'} className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/contact' ? activeStyle.color : 'white-text')}>
                            Contact Us
                        </Nav.Link>
                        {isAuthenticated ? (
                            <Nav.Link
                                href="/dashboard"
                                style={{
                                    width: "120px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn waves-effect waves-light hoverable blue accent-3"
                            >
                                Dashboard
                            </Nav.Link>
                        ) : (
                            <>
                                <Nav.Link
                                    href="/login"
                                    className={"btn btn-flat waves-effect hoverable " + (location.pathname === '/login' ? activeStyle.color : 'white-text')}
                                >
                                    Log In
                                </Nav.Link>
                                <Nav.Link
                                    href="/signup"
                                 
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
