/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import backgroundImg from '../../assets/background image.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
const Login = () => {
    const[error,setError] =useState('');
    const[user,setUser] = useState('');
    const {signIn,googleSignIn,githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/home';
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            
            
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const handleLogIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password)
        if(password !== form.password.value){
            setError('password is incorrect')
            return
        }
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.log(error)
        })
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
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p className='text-danger'>{error.message}</p>
      <p><small>new to website? please 
        <Link to={'/signup'}> Sign Up</Link>
        </small></p>
    </Form>
        </Container>
        <div>
        <p className='text-danger'>{error}</p>
        </div>
        <div className='m-auto text-center'>
        <button onClick={handleGoogleSignIn} className='btn btn-primary mt-3'>sign in with google</button>
        <br />
        <button onClick={handleGithubSignIn} className='btn btn-primary mt-3'>sign in with github</button>
        </div>
           </div>
       
    );
};

export default Login;