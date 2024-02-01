import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

const Login = ({ loginUser, auth, errors }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    loginUser(userData);
  };

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  return (
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col-lg-5">
          <Link to="/" className="btn btn-flat white-text text-darken-1">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12 text-white" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="white-text text-darken-1">
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12 text-white">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <label htmlFor="email" className="black text-grey">Email</label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="input-field col s12 text-white">
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <label htmlFor="password"  className="black text-grey">Password</label>
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
