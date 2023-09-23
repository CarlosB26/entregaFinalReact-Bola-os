import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logoTT.png'
import { Link } from "react-router-dom";

export const NavBar = () => (
  <header>
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
            <Navbar.Brand as={Link} to="/"> <img src={logo} alt="logo" id="Logo" /></Navbar.Brand>
            <CartWidget/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/category/hombre">Hombre</Nav.Link>
              <Nav.Link as={Link} to="/category/mujer">Mujer</Nav.Link>
              <Nav.Link as={Link} to="/category/variado">Variado</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  </header>
);
