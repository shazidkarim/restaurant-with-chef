/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
  const {user, logOut} =useContext(AuthContext);
  console.log(user)
  const handleSignOut = ()=>{
    logOut()
    .then(result=>{

    })
    .catch(error=>
      console.error(error))
  }
    return (
        <Container>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className='fst-italic' href="#home">CHEF RECIPE</Navbar.Brand>
          <Nav className="m-auto">
            <Link className='me-3' to={'/home'}> <button className='btn btn-primary'>Home</button> </Link>
            <Link className='me-3' to={'/blog'}><button className='btn btn-primary'>Blog</button></Link>
            <Link className='me-3' to={'/login'}><button className='btn btn-primary'>Login</button></Link>
            <Link className='me-3' to={'/signup'}><button className='btn btn-primary'>Sign Up</button></Link>
            {
              user && <span>{user.email} <button className='btn btn-primary' onClick={handleSignOut}>Log out</button></span>
            }
          </Nav>
        </Container>
      </Navbar>
    </Container>
    );
};

export default NavBar;