import React from 'react';
import {useLoaderData } from 'react-router-dom';
import Listjob from '../Listjob/Listjob';


const Banner = () => {
    const JobList = useLoaderData()
    return (
        <>
            <div className='md:flex justify-between items-center gap-55 mt-10 mb-10'>
                <div className='text-left'>
                    <h1 className='text-6xl font-semibold mt-5 mb-5'>One Step <br/> Closer To Your <br/><span className='text-blue-700'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='text-xl mt-5 bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Get Started</button>
                </div>
                <img className='md:w-2/4' src="https://www.freepnglogos.com/uploads/man-png/man-your-company-formations-formation-registrations-10.png" alt="" />
            </div>
            <div className='mt-20'>
                <h1 className='text-5xl font-semibold'>Job Category List</h1>
                <p className='text-2xl mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex justify-between mt-20'>
                    {
                        JobList.map(job => <Listjob job={job} key={job.id}></Listjob>)
                    }
                </div>
            </div>
        </>
        );
};

export default Banner;