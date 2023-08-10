import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logoTT.png'

export const NavBar = () => (
    <header>
        <>
        <Navbar id="navbar">
        <Container>
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="logo" id="Logo"/> </Navbar.Brand>
          <CartWidget />
        </Container>
          <Nav className="d-flex">
            <Container className="d-flex">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Products</Nav.Link>
                <Nav.Link href="#pricing">About us</Nav.Link>
            </Container>
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
        </Container>
      </Navbar>
      </>

    </header>
);
