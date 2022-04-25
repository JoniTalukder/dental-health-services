import React from 'react';


const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: ${price}</p>
                    <a href="#" className="btn btn-info">{name} Details</a>
                </div>
            </div>
        </div>
    );
};

export default Service;