import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

const Signup = ({ auth, errors, registerUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    };

    registerUser(newUser);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Link to="/" className="btn btn-flat white-text">
            <i className="material-icons left">keyboard_backspace</i> Back to home
          </Link>
          <div className="col s12 text-white" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Signup</b> here
            </h4>
            <p className="white-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-field col s12 text-white">
              <input
                onChange={handleChange}
                value={user.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
              <label htmlFor="name"  className="black text-grey">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
              <label htmlFor="email"  className="black text-grey">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <label htmlFor="password"  className="black text-grey">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
              <label htmlFor="password2"  className="black text-grey">Confirm Password</label>
              <span className="red-text">{errors.password2}</span>
            </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3 text-white"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
    };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
    });

export default connect(
    mapStateToProps,
    { registerUser }
    )(Signup);
