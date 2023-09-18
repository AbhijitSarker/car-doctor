import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        fetch(`https://server-ivory-kappa.vercel.app/?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [asc, search]);

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    };
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-500'>Our Services</h3>
                <h2 className='text-4xl font-bold'>Our Service Area</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus corrupti dolores! Rem dicta atque corrupti sit accusantium et veniam iure harum ad soluta nisi ratione, sequi officiis natus mollitia provident molestiae aliquam est! Repellat deleniti repudiandae blanditiis maxime quod sed rerum enim est, dicta laborum deserunt quae corporis exercitationem.</p>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <button className='btn m-5' onClick={() => setAsc(!asc)}>{asc ? 'Price High to Low' : 'Price Low To High'}</button>
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