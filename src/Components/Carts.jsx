import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Carts = ({carts,handleRemove}) => {

    const [totalPrice , setTotalPrice] = useState(0);

    useEffect(()=>{
        const total = carts.reduce((acc,curr)=>{
          return acc += curr.cartQuantity * curr.price
        },0)
        setTotalPrice(total)
    },[carts])

    return (
        <div>
            <h1 className='text-xl font-bold'>Here is your added product : {carts.length}</h1>

            <ul className='mb-3'>
                {
                   carts.map(cart => <Cart
                   key={cart.id}
                   handleRemove={handleRemove}
                     cart={cart}></Cart>)
                }
            </ul>
            <hr />
            <div className='flex justify-between text-xl mt-2'>
            <p className='font-bold'>Total Price :  </p>
            <p className='font-bold'>${totalPrice}</p>
            </div>
        </div>
    );
};

export default Carts;