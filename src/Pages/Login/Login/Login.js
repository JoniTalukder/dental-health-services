import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/register');
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-info text-center'>Login Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-block mx-auto my-2 w-50' variant="info" type="submit">
                    Login
                </Button>
                
            </Form>
            <p>New Dental Health Service? <Link to={'/register'} className='text-info pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> 
            </p>
            <p>Forget Password? <Button variant='link' className='text-info pe-auto text-decoration-none' >Reset Password</Button></p>
            
          
        </div>
    );
};

export default Login;