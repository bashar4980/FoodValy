import React from 'react';
import Star from './Star';

const FeatureCard = ({trandingProduct}) => {
    return (
      
  
        <div className="card border-gray-100 border-2 relative w-full max-h-[400px]  shadow-xl">
        <figure className="">
          <img src={trandingProduct.productImg} className="rounded " alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-text font-bold">
            {trandingProduct.productName}
           
          </h2>
          <div className='flex'><Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star></div>
          <p className='text-[#70e24a] font-bold'>IN STOCK</p>
          <p>Prise: {trandingProduct.Price}</p>
          
          <div className="card-actions justify-between">
          <button className="btn btn-sm bg-[#6EB356] px-5 border-0">Add to Cart</button>
            
          </div>
        </div>
      </div>

    );
};

export default FeatureCard;