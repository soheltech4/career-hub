import React from 'react';
import Home from '../Home/Home';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between items-center bg-orange-100'>
                <h1 className='text-4xl font-semibold'>CAREERS</h1>
                <div className='flex gap-10 text-xl'>
                    <Link className='hover:bg-blue-500 - rounded' to='/'>Home</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/statistics'>Statistics</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/appliedjobs'>Applied Jobs</Link>
                    <Link className='hover:bg-blue-500 - rounded' to='/blog'>Blog</Link>
                </div>
                <button className='text-xl bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;