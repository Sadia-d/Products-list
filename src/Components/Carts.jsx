import React from 'react';
import Cart from './Cart';

const Carts = ({carts}) => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Here is your added product : {carts.length}</h1>

            <ul>
                {
                   carts.map(cart => <Cart
                   key={cart.id}
                     cart={cart}></Cart>)
                }
            </ul>
        </div>
    );
};

export default Carts;