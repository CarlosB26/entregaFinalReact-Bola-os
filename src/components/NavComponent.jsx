import { useEffect, useState } from 'react';
import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logoTT.png';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const AppNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const navbarStyle = {
    transition: 'top 0.7s',
    top: visible ? '0' : '-350px', // Adjust -70px according to your Navbar height
  };

  return (
    <header>
      <>
        <Navbar collapseOnSelect expand="lg" id="navbar" data-bs-theme="dark" fixed="top" style={navbarStyle}>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/category/hombre" className="nav-link">
                  Hombre
                </NavLink>
                <NavLink to="/category/mujer" className="nav-link">
                  Mujer
                </NavLink>
                <NavLink to="/category/variado" className="nav-link">
                  Variado
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand as={Link} to="/">
              {' '}
              <img src={logo} alt="logo" id="Logo" />
            </Navbar.Brand>
            <CartWidget />
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default AppNavbar;