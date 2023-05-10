import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from './components/layout/Navbar'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import './styles/App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from 'react-redux'
import Map from './containers/Map'
import Dis from './containers/Discover'
import Login from './containers/Login'
import Signup from './containers/Signup'
import store from './store'
import PrivateRoute from './components/private-route/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={<Map />}
                    />
                    <Route
                      exact
                      path="/discover"
                      element={<Dis/>}
                    />
                    <Route
                      exact
                      path="/login"
                      element={<Login />}
                    />
                    <Route
                      exact
                      path="/signup"
                      element={<Signup />}
                    />
                    <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                  </Routes>
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    </div>
  )
}

export default App
