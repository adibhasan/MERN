import React from 'react';
import logo from './logo.svg';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateStudent from './components/CreateStudent/CreateStudent';
import EditStudent from './components/EditStudent/EditStudent';
import StudentList from './components/StudentList/StudentList';

function App() {
  return (
    <Router>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/create-student'} className="nav-link">React Mern Stack APP</Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={'/create-student'} className="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={'/student-list'} className="nav-link">
                  Student List
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
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
