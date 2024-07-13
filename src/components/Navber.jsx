import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-br from-black to-[#14311b] text-white p-4 h-[10vh] flex justify-between items-center">
            <Search/>
        </nav>
    );
};

export default Navbar;