import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({ cart ,handleRemove}) => {
    const {id, name, price, image, cartQuantity, stock } = cart;


    return (
        <div className='flex gap-6 mt-3 bg-blue-200 p-4 rounded-xl'>
            {/* image */}
            <div>
                <img
                    className='h-14 w-14 object-cover rounded-xl'
                    src={image} alt="" />
            </div>

            {/* text */}

            <div>
                <h1 className='text-lg font-bold'>{name}</h1>
                <div className='flex gap-14 mt-3'>
                    <p className='font-medium'>Price : {price * cartQuantity}</p>
                    <p className='font-medium'>Quantity : {cartQuantity}</p>

                </div>
                <div className='flex items-center mt-1.5 gap-32'>
                    <p className='font-medium'>Stock : {stock}</p>
                    <AiOutlineDelete onClick={()=>handleRemove(id)} className='text-2xl text-red-600' />
                </div>
            </div>
        </div>
    );
};

export default Cart;