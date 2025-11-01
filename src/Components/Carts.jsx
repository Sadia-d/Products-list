import React, { useEffect, useState } from 'react';
import CartProd from './CartProd';

const Carts = ({ carts }) => {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const tPrice = carts.reduce((acc, curr) => (
            acc += curr.cartQuantity * curr.price
        ), 0)
        setTotalPrice(tPrice);
    }, [carts])

    return (
        <div className='mt-8'>
            <h1>Here is your added products : {carts.length}</h1>
            <div>
                <ul className='mb-3'>
                    {
                        carts?.map((cart) => <CartProd cart={cart}></CartProd>)
                    }
                </ul>
                  <hr />
              <div className='flex justify-between p-5 m'>
                <p className='font-bold text-2xl text-green-500'>Total Price : </p> <p className='font-bold text-2xl text-green-500'>${totalPrice}</p>
            </div>
            </div>
        </div>
    );
};

export default Carts;