/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import backgroundImg from '../../assets/background image.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password)
    }
    return (   
           <div className='form-control w-25 mt-5 mx-auto border  justify-content-center align-items-center p-4'>
             <Container>
            <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p><small>new to website? please 
        <Link to={'/signup'}> Sign Up</Link>
        </small></p>
    </Form>
        </Container>
        <div className='m-auto text-center'>
        <button className='btn btn-primary mt-3'>sign in with google</button>
        <br />
        <button className='btn btn-primary mt-3'>sign in with github</button>
        </div>
           </div>
       
    );
};

export default Login;