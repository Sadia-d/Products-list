import React from 'react';

const CartProd = ({cart}) => {
    console.log(cart)
     const { name, price, image,cartQuantity } = cart;
    return (
        <div className='flex items-center gap-8 mt-8'>
            {/* image div */}
            <div className=''>
            <img className='h-14 w-16 rounded-xl' src={image} alt="" srcset="" />
            </div>
            {/* text div */}
            <div>
                <h1>{name}</h1>
                <div className='flex gap-4'>
                    <p>Price : {price }</p>
                    <p>Quantity {cartQuantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CartProd;