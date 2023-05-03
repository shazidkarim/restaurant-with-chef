/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';

const SignUp = () => {
    const[error,setError] =useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name,email,password);
        setError('');
        form.reset();
        if(password !== confirm){
            setError('password does not match')
            return
        }
        else if(password.length <6){
            setError('password must be at least 6 character')
            return
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-control w-25 mt-5 mx-auto border  justify-content-center align-items-center p-4'>
             <Container>
            <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Photo url</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter photo url" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="Confirm Password" />
      </Form.Group>
      <Form.Text className="text-muted">
         <p className='text-danger'>{error}</p>
        </Form.Text>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
      <p><small>Already have an account? please 
        <Link to={'/login'}>Login</Link>
        </small></p>
    </Form>
        </Container>
           </div>
    );
};

export default SignUp;