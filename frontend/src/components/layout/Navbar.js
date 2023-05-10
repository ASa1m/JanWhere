import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/App.css';
import store from "../../store";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: store.getState().auth.isAuthenticated
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        isAuthenticated: store.getState().auth.isAuthenticated
      });
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="nav">
        <nav className="z-depth-0 white">
          <div className="nav-wrap white">
            <div className="left black-text">
              <Link
                to="/"
                style={{
                  fontFamily: "monospace"
                }}
                className="brand-logo left black-text"
              >
                <i className="material-icons">code</i>
                JanWhere
              </Link>
            </div>
            <div className="right black-text">
              <Link to={'/'} className="btn btn-flat waves-effect white black-text">
                Home
              </Link>
              <Link to={'/discover'} className="btn btn-flat waves-effect white black-text">
                Discover
              </Link>
              <Link to={'/about'} className="btn btn-flat waves-effect white black-text">
                About Us
              </Link>
              <Link to={'/contact'} className="btn btn-flat waves-effect white black-text">
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
                    className="btn btn-flat waves-effect white black-text"
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
}

export default Navbar;
