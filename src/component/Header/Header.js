import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-gray-300 py-5 flex justify-between px-5'>
            <p className='inline-block text-5xl font-semibold text-green-700 text-center'>Agri Product Tracker</p>
            <Link to={'/all-products'} className='text-xl font-semibold bg-green-700 text-center p-2 text-white rounded'>Traceability</Link>
        </div>
    );
};

export default Header;