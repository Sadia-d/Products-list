import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    return (
        <div className='grid grid-cols-3 justify-items-center gap-y-7 py-9'>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;