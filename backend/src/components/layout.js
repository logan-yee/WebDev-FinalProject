import React from 'react';
import navBar from './Navbar';
import { Outlet } from 'react-router-dom';

function layout() {
    return (
        <div>
            <navBar />
            <Outlet />
        </div>
    );
}

export default layout;