import React from 'react';
import { Link } from 'react-router-dom';

const JobApplied = ({Job}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, location, salary} = Job
    return (
        <div className='container mx-auto flex justify-between items-center border bg-purple-50 rounded p-5 w-4/4 h-full hover:border-blue-700 gap-10'>
            <div className='flex justify-between items-center gap-10'>
                <div className='bg-gray-100 flex border rounded w-32 h-32 p-3 items-center'>
                     <img className='w-56' src={companyLogo} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{jobTitle}</h1>
                    <h1 className='text-xl font-semibold'>{companyName}</h1>
                    <div className='flex text-xl gap-5 font-semibold'>
                        <h1 className='border px-3 py-2 rounded 8px border-blue-700'>{remoteOrOnsite}</h1>
                        <h1 className='border px-3 py-2 rounded 8px border-blue-700'>{fulltimeOrParttime}</h1>
                    </div>
                    <div className='flex gap-5 mt-3 mb-3'>
                        <p>Location: <span className='font-semibold'>{location}</span></p>
                        <p>Salary: <span className='font-semibold'>{salary}</span></p>
                    </div>
                </div>
            </div>
            <div>
            <button className='text-xl bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>View Details</button>
            </div>
        </div>
    );
};

export default JobApplied;