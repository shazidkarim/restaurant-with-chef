/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='fst-italic' href="#home">CHEF RECIPE</Navbar.Brand>
          <Nav className="m-auto">
            <Link className='me-3' to={'/home'}> <button>Home</button> </Link>
            <Link className='me-3' to={'/blog'}><button>Blog</button></Link>
            <Link className='me-3' to={'/login'}><button>Login</button></Link>
            <Link className='me-3' to={'/signup'}><button>Sign Up</button></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default NavBar;