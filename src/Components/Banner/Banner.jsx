import React, { useEffect, useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import Listjob from '../Listjob/Listjob';
import Featuredjobs from '../Featured Jobs/Featuredjobs';


const Banner = () => {
    const [showAll, setShowAll] = useState(false);
    const features = useLoaderData()
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('Job-List.json')
        .then(res => res.json())
        .then(data => setList(data))
    },
    [])

    const handleClick = () => {
        setShowAll(!showAll);
    };

    console.log(showAll)

    return (
        <div className='container mx-auto'>
            <div className='container mx-auto p-5'>
            <div className='md:flex justify-between items-center gap-55 mt-10 mb-10 '>
                <div className='text-left'>
                    <h1 className='text-6xl font-semibold mt-5 mb-5'>One Step <br/> Closer To Your <br/><span className='text-blue-700'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='text-xl mt-5 bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Get Started</button>
                </div>
                <img className='md:w-2/4' src="https://www.freepnglogos.com/uploads/man-png/man-your-company-formations-formation-registrations-10.png" alt="" />
            </div>
            <div className='mt-28'>
                <h1 className='text-5xl font-semibold text-center'>Job Category List</h1>
                <p className='text-2xl mt-5 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:flex justify-between mt-20 md:gap-10 mb-10 p-3'>
                    {
                        list.map(job => <Listjob job={job} key={job.id}></Listjob>)
                    }
                </div>
            </div>          
            </div>
            <div>
            <h1 className='text-5xl font-semibold text-center mt-28'>Featured Jobs</h1>
            <p className='text-2xl mt-5 text-center mb-10 p-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:grid grid-cols-2 gap-x-5 container mx-auto items-center md:gap-10 gap-y-16 mb-10 p-3'>
                    {
                            features.map(feature => <Featuredjobs key={feature.id} feature={feature}></Featuredjobs>)
                    }
                </div>
            </div>
            <div className='flex items-center justify-center mb-5'>
                <button onClick={handleClick} className='text-xl text-center mt-5 bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Show More</button>
            </div>
        </div>
        );
};

export default Banner;