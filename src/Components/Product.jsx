import React from 'react';

const Product = ({ product }) => {
    console.log(product);
    const { name, category, price, rating, image,description } = product;

    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-96 h-64 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline border-none text-white py-2 bg-blue-500">{category}</div>
                        <div className="badge badge-outline border-none text-white py-2 bg-blue-500">{rating}</div>
                        <div  className="badge badge-outline border-none text-white py-2 bg-blue-500">${price}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;