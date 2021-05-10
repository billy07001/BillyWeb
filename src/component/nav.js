import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Collapse, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"


function formatName(user) {
  return user.firstName + '' + user.lastName;
}

const user = {
  firstName: 'Billy',
  lastName: 'Lai'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function Topnav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Link to="/"><Navbar.Brand>{element}</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="Nav__link" to="/news"><Nav.Link href="#news">News</Nav.Link></Link>
          <Link className="Nav__link" to="/aboutme"><Nav.Link href="#aboutme">About me</Nav.Link></Link>

          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <Link className="Nav__link" to="/javainportfolio"><NavDropdown.Item href="#javainportfolio">JAVA</NavDropdown.Item></Link>
            <Link className="Nav__link" to="/webinportfolio"><NavDropdown.Item href="#webinportfolio">Web</NavDropdown.Item></Link>
          </NavDropdown>

          <NavDropdown title="Study note" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">JAVA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Web</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Database</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          <Clicktodisplay />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Clicktodisplay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-success"
      >
        Log In
          </Button>

      <Collapse in={open}>
        <Card>
          <Container>
            <Form className="form">
              <Row className="justify-content-md-end">
                <Form.Group controlId="formBasicEmail">
                  <Col><Form.Label id="username">Username</Form.Label></Col>
                  <Col><Form.Control placeholder="Enter Username" /></Col>
                </Form.Group>
              </Row>

              <Row className="justify-content-md-end">
                <Form.Group controlId="formBasicPassword">
                  <Col><Form.Label>Password</Form.Label></Col>
                  <Col><Form.Control type="password" placeholder="Password" /></Col>
                </Form.Group>
              </Row>
              <Row className="justify-content-md-end">
                <Form.Group controlId="formBasicCheckbox">
                  <Col><Form.Check type="checkbox" label="Remember Me" /></Col>
                </Form.Group>
                <Col><Button variant="success" type="submit">
                  Log In
            </Button></Col>
              </Row>
            </Form>
          </Container>
        </Card>
      </Collapse>
    </>
  );
}

export default Topnav;