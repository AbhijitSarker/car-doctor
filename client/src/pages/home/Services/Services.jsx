import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('https://server-ivory-kappa.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-500'>Our Services</h3>
                <h2 className='text-4xl font-bold'>Our Service Area</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus corrupti dolores! Rem dicta atque corrupti sit accusantium et veniam iure harum ad soluta nisi ratione, sequi officiis natus mollitia provident molestiae aliquam est! Repellat deleniti repudiandae blanditiis maxime quod sed rerum enim est, dicta laborum deserunt quae corporis exercitationem.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;