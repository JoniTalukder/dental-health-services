import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    // const navigateCheckOut = id => {
    //     navigate(`/service/${id}`);
    // }
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: ${price}</p>
                    {/* <Link to='/checkout'>
                        <button onClick={() => navigateCheckOut(id)} className="btn btn-info">{name} Details</button>
                    </Link> */}
                    <Link to={`/service/${id}`} className="card-link">Details</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;