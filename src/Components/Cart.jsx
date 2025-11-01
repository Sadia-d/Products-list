import React from 'react';

const Cart = ({cart}) => {
   const { name, price, image ,cartQuantity ,stock} = cart;

    return (
        <div className='flex gap-6 mt-3 bg-blue-200 p-4 rounded-xl'>
            {/* image */}
            <div>
                <img 
                className='h-14 w-14 object-cover rounded-xl'
                src={image} alt="" srcset="" />
            </div>
            
            {/* text */}

            <div>
                <h1>{name}</h1>
                <div className='flex gap-3'>
                    <p>Price : {price * cartQuantity}</p>
                    <p>Quantity : {cartQuantity}</p>
                    <p>Stock : {stock}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;