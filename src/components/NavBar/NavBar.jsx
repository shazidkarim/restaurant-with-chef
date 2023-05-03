/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
  const {user} =useContext(AuthContext);
  console.log(user)
    return (
        <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='fst-italic' href="#home">CHEF RECIPE</Navbar.Brand>
          <Nav className="m-auto">
            <Link className='me-3' activeClassName='active' to={'/home'}> <button className='btn btn-primary'>Home</button> </Link>
            <Link className='me-3' activeClassName='active' to={'/blog'}><button className='btn btn-primary'>Blog</button></Link>
            <Link className='me-3' activeClassName='active' to={'/login'}><button className='btn btn-primary'>Login</button></Link>
            <Link className='me-3' activeClassName='active' to={'/signup'}><button className='btn btn-primary'>Sign Up</button></Link>
            {
              user && <span>welcome{user.email}</span>
            }
          </Nav>
        </Container>
      </Navbar>
    </Container>
    );
};

export default NavBar;