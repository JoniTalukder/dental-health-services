import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const CheckOut = () => {
    let { serviceId } = useParams();
    console.log(serviceId);

    return (
        <div>
            <h2>Check Out:{serviceId}</h2>
            <div className='text-center'>
                <Link to="/thankyou">
                    <Button variant='info' >Thank You</Button>
                </Link>
            </div>

        </div>
    );
};

export default CheckOut;