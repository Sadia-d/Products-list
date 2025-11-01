import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({handleCardUpdate}) => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    return (
        <div className='grid grid-cols-2 justify-items-center gap-y-7 py-9'>
            {
                products.map(product => <Product
                key={product.id}
                     product={product} 
                handleCardUpdate={handleCardUpdate}
                ></Product>)
            }
        </div>
    );
};

export default Products;