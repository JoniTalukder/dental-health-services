import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../CustomHook/useData';
import Service from '../Home/Service/Service';

const CheckOut = () => {
    let { serviceId } = useParams();
    console.log(serviceId);


     const [services, setServices] = useData();
    return (
        <div>
            <h2>Check Out:{serviceId}</h2>
            {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
        </div>
    );
};

export default CheckOut;