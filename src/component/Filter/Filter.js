import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const Filter = () => {
    const navigate = useNavigate()
  /*   const [product,setProduct] = useProduct() */
    const handleSubmit = e =>{
    e.preventDefault();
    const pID = e.target.productId.value;
/*     const specificProduct = product.find(sp=>sp.id===pID)
    console.log(specificProduct); */

    navigate(`product/${pID}`)
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className='text-center my-5 mx-1'>
                    <input className='text-xl lg:text-2xl p-2 border-2 border-green-700 rounded-l-lg outline-none' type="text" name='productId' placeholder='Product Id'/>
                    <button className=' bg-green-700 text-white text-2xl px-3 lg:px-6 py-2 rounded-r-lg ml-1' type="submit">Search</button>
                </div>
            </form>

            <div>
                
            </div>
        </div>
    );
};

export default Filter;