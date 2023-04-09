import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;