import React from 'react';
import { Link, Outlet } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200 w-full">
                <div className="flex items-center">
                    <Link to="/">
                        <span className="text-lg font-medium">Danny Redden</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link to="/contact">
                        <span className="text-lg font-small">Contact</span>
                    </Link>
                </div>
            </nav>
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;