import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../App.css';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">🍕Pizzeria Mama Mia!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <span>🛒$ </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;