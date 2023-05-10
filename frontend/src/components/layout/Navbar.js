import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles/App.css';
import store from "../../store";

const activeStyle = { color: "blue-text" };

function Navbar() {

    const isAuthenticated = store.getState().auth.isAuthenticated;

    let location = useLocation();

    useEffect(() => {
        store.subscribe(() => {
            this.setState({
                isAuthenticated: store.getState().auth.isAuthenticated
            });
        });
    }
    );

    return (
        <div className="nav">
            <nav className="z-depth-0" style={{ backgroundColor: '#000500' }}>
                <div className="nav-wrap">
                    <div className="left white-text">
                        <Link
                            to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="brand-logo left white-text"
                        >
                            <i className="material-icons">map</i>
                            JanWhere
                        </Link>
                    </div>
                    <div className="right white-text">
                        <Link to={'/'} className={"btn btn-flat waves-effect hoverable "+(location.pathname === '/' ?  activeStyle.color : 'white-text')}>
                            Home
                        </Link>
                        <Link to={'/discover'} className={"btn btn-flat waves-effect hoverable "+(location.pathname === '/discover' ? activeStyle.color : 'white-text')}>
                            Discover
                        </Link>
                        <Link to={'/about'} className={"btn btn-flat waves-effect hoverable "+(location.pathname === '/about' ? activeStyle.color : 'white-text')}>
                            About Us
                        </Link>
                        <Link to={'/contact'} className={"btn btn-flat waves-effect hoverable "+(location.pathname === '/contact' ? activeStyle.color : 'white-text')}>
                            Contact Us
                        </Link>
                        {isAuthenticated ? (
                            <Link
                                to="/dashboard"
                                style={{
                                    width: "120px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn waves-effect waves-light hoverable blue accent-3"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    style={{
                                        width: "100px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className={"btn btn-flat waves-effect hoverable "+(location.pathname === '/login' ? activeStyle.color : 'white-text')}
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    style={{
                                        width: "120px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
