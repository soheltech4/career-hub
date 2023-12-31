import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Featuredjobs = ({feature}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, location, salary} = feature
   
    return (
        <div className='border bg-purple-50 rounded p-5 w-4/4 h-full hover:border-blue-700'>
            <img className='w-36' src={companyLogo} alt="" />
            <h1 className='text-3xl font-semibold mt-3 mb-3'>{jobTitle}</h1>
            <h1 className='text-xl font-semibold mb-3'>{companyName}</h1>
            <div className='flex text-xl gap-5 font-semibold'>
                <h1 className='border px-3 py-2 rounded 8px border-blue-700'>{remoteOrOnsite}</h1>
                <h1 className='border px-3 py-2 rounded 8px border-blue-700'>{fulltimeOrParttime}</h1>
            </div>
            <div className='flex gap-5 mt-3 mb-3'>
                <p>Location: <span className='font-semibold'>{location}</span></p>
                <p>Salary: <span className='font-semibold'>{salary}</span></p>
            </div>
            <button className='text-xl bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'> <Link to={`viewdetails/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Featuredjobs;