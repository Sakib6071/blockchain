import React from 'react';
import { useParams } from 'react-router-dom';

const AllProduct = () => {
    const{al}=useParams()
    console.log(al);
    return (
        <div className='absolute top-0 '>
            <img src={`https://i.ibb.co/pbHT58F/map-1.jpg`} alt="" />
        </div>
    );
};

export default AllProduct;