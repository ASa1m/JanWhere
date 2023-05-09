import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from './components/layout/Navbar'
import Row from 'react-bootstrap/Row'
import './styles/App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import Map from './components/map.component'
import StudentList from './components/student-list.component'
import Login from './containers/Login'
import Signup from './containers/Signup'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Map {...props} />}
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
