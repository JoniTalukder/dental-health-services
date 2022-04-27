import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorMessage;
    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} ||{error1?.message}</p>
    }
    // if (loading || loading1) {
    //     return <Loading></Loading>
    // }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary 1px w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary 1px w-50'></div>

            </div>
            <div>
                {errorMessage}
                <Button
                    onClick={() => signInWithGoogle()}
                    className='d-block mx-auto my-2 w-50' variant="info" size="lg">
                    {/* <i className="fab fa-google"></i> */}
                    <span className='px-2'>Google Sign In</span>
                </Button>
                <Button
                    onClick={() => signInWithGithub()}
                    className='d-block mx-auto my-2 w-50' variant="info" size="lg">
                    {/* <i className="fab fa-github"></i> */}
                    <span className='px-2'>Git Hub Sign In</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;