import useData from '../../../CustomHook/useData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useData();

    return (
        <div id='services' className='container'>
            <h2 className='text-info text-center text-uppercase mt-5'>Our Services</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;