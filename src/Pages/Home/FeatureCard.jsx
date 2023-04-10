import React, { useContext } from 'react';
import Star from './Star';
import { ProductContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const FeatureCard = ({trandingProduct}) => {
  const {addTocard} = useContext(ProductContext)
  const addtocard = (product)=>{
        toast.success('Successfully Add to cart!')
        addTocard.push(product)
   }
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
          <p>Price: $ {trandingProduct.Price}</p>
          
          <div className="card-actions justify-between">
          <a className="btn btn-sm bg-[#6EB356] px-5 border-0" onClick={()=> addtocard (trandingProduct)}>Add to Cart</a>
            
          </div>
        </div>
      </div>

    );
};

export default FeatureCard;