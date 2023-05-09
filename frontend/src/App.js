import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from './components/layout/Navbar'
import Row from 'react-bootstrap/Row'
import './styles/App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Map from './components/map.component'
import Login from './containers/Login'
import Signup from './containers/Signup'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
          <Navbar />
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
                    path="/login"
                    element={ <Login />}
                  />
                  <Route
                    exact
                    path="/signup"
                    element={<Signup />}
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
