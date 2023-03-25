import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ShowProduct = () => {
    const {pid} = useParams()
    const [product,setProduct] = useProduct()
    const specificProduct = product.find(sp=>sp.id===pid)
    console.log(specificProduct);
    return (
        <>
        {
            specificProduct ? <div className=' my-10 bg-gray-200 p-5 grid grid-cols-1 lg:grid-cols-2 gap-2 md:w-5/6 mx-auto'>
            <div className='order-2 lg:order-1'>
                <p className='text-4xl mt-2 font-semibold'>{specificProduct?.productName}</p>
                <p><i>Product ID: {specificProduct?.id}</i></p>
                <p className='mt-5 text-3xl font-semibold text-green-700'>Producer Info</p>
                <p className='text-xl'><b>Producer Name :</b> {specificProduct?.producerName}</p>
                <p className='text-xl'><b>Producer Address :</b> {specificProduct?.producerAddress}</p>
                <p className='text-xl'><b>Place Of Production :</b> {specificProduct?.placeAddress}</p>
                <p className='text-xl'><b>Selling Price :</b> {specificProduct?.producerSellingPrice} TK</p>
                <p className='text-xl'><b>Selling Date :</b> {specificProduct?.producerSellingDate}</p>


                <p className='mt-5 text-3xl font-semibold text-green-700'>Processor Info</p>
                <p className='text-xl'><b>Processor Address :</b> {specificProduct?.processorAddress}</p>
                <p className='text-xl'><b>Processing Cost :</b> {specificProduct?.processorProcessingCost} TK</p>
                <p className='text-xl'><b>Selling Price :</b> {specificProduct?.processorSellingPrice} TK</p>
                <p className='text-xl'><b>Profit :</b> {(specificProduct?.processorSellingPrice)-((specificProduct?.producerSellingPrice)+(specificProduct?.processorProcessingCost))} TK</p>


                <p className='mt-5 text-3xl font-semibold text-green-700'>Transporter Info</p>
                <p className='text-xl'><b>Transporter Address :</b> {specificProduct?.transporterAddress}</p>
                <p className='text-xl'><b>Transport Route :</b> {specificProduct?.transportRoute}</p>
                <p className='text-xl'><b>Transport Distance :</b> {specificProduct?.transportDistance} KM</p>
                <p className='text-xl'><b>Transport Cost :</b> {specificProduct?.transportCost} TK</p>
                <p className='text-xl'><b>Selling Price :</b> {specificProduct?.transporterSellingPrice} TK</p>
                <p className='text-xl'><b>Profit :</b> {(specificProduct?.transporterSellingPrice)-((specificProduct?.transportCost)+(specificProduct?.processorSellingPrice))} TK</p>


                <p className='mt-5 text-3xl font-semibold text-green-700'>Distributor Info</p>
                <p className='text-xl'><b>Distributor Address :</b> {specificProduct?.distributorAddress}</p>
                <p className='text-xl'><b>Distribution Cost :</b> {specificProduct?.distributionCost} TK</p>
                <p className='text-xl'><b>Selling Price :</b> {specificProduct?.distributorSellingPrice} TK</p>
                <p className='text-xl'><b>Profit :</b> {(specificProduct?.distributorSellingPrice)-((specificProduct?.distributionCost)+(specificProduct?.transporterSellingPrice))} TK</p>

                <p className='mt-5 text-3xl font-semibold text-green-700'>Retailer Info</p>
                <p className='text-xl'><b>Retailer Address :</b> {specificProduct?.retailerAddress}</p>
                <p className='text-xl'><b>Selling Price :</b> {specificProduct?.retailerSellingPrice} TK</p>
                <p className='text-xl'><b>Profit :</b> {(specificProduct?.retailerSellingPrice)-(specificProduct?.distributorSellingPrice)} TK</p>
            </div>
            <div className='order-1 lg:order-2 flex justify-center items-center'>
                <img className='rounded-lg border-2 border-green-700' src={specificProduct?.photo} alt="" />
            </div>
            
        </div> : <div><p className='text-red-500 text-center text-3xl'>Item not exist</p></div>
        }
        
        </>
    );
};

export default ShowProduct;