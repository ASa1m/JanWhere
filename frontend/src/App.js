import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Logo } from './cat.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'
import Login from './containers/Login'
import Signup from './containers/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
                <Logo className='App-logo' alt='logo' />
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                  JanWhere
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/'} className="nav-link">
                    Discover
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/'} className="nav-link">
                    About Us
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/'} className="nav-link">
                    Contact Us
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/login'} className="nav-link">
                    Login
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/signup'} className="nav-link">
                    Sign Up
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/signup"
                    component={(props) => <Signup {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
