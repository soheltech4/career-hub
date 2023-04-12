import React from 'react';
import Home from '../Home/Home';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='p-5 container mx-auto md:flex justify-between items-center mt-10'>
                <h1 className='text-4xl font-semibold'>CAREERS</h1>
                <div className='md:flex gap-y-2 my-3 grid md:gap-10 text-xl'>
                    <Link className='hover:bg-blue-500 - rounded' to='/'>Home</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/statistics'>Statistics</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/appliedJobs'>Applied Jobs</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/blog'>Blog</Link>
                </div>
                <button className='text-xl bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;