import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password); 
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-info text-center'>Register Form</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-block mx-auto my-2 w-50' variant="info" type="submit">
                    Register
                </Button>
                
            </Form>
            <p>Already have an account? <Link to={'/login'} className='text-info pe-auto text-decoration-none' onClick={navigateLogin}>Login Please</Link> 
            </p>
            
            
          
        </div>
    );
};

export default Register;