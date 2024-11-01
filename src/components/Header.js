import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-gray-600 p-4 text-white">
            <nav>
                <h1 className='mr-4 text-orange-500 text-center text-7xl font-poppins'>FLY AS YOU WISH</h1>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/register" className="mr-4">Register</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
