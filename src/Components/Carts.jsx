import React, { useEffect, useState } from 'react';
import CartProd from './CartProd';

const Carts = ({ carts }) => {

   

    return (
        <div className='mt-8'>
            <h1>Here is your added products : 0</h1>
            <div>
                <ul>
                    {
                        carts?.map((cart) => <CartProd cart={cart}></CartProd>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Carts;