import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function CollapsibleExample() {

    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink onClick={() => setExpanded(false)} to="/" className="nav-item nav-link hovMenu">Features</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/quienesSomos" className="nav-item nav-link hovMenu">QUIENES SOMOS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/servicios" className="nav-item nav-link hovMenu">SERVICIOS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/distribucion" className="nav-item nav-link hovMenu">DISTRIBUCION</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/sumateAlEquipo" className="nav-item nav-link hovMenu">SUMATE AL EQUIPO</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/contacto" className="nav-item nav-link hovMenu">CONTACTO</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;