import React, { useContext } from 'react';
import { ProductContext } from '../../Context/AuthProvider';
import Star from '../Home/Star';

const ProductCard = () => {
    const {products} = useContext(ProductContext);
    console.log(products)
    return (
        <div>


<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        All Food Product Collection
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <div className="mt-8 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div className="hidden space-y-4 lg:block">
       

        <div>
          <p className="block text-xs font-medium text-gray-700">Filters by Catrgory</p>

          <button className='btn mt-5'>FRUIT & VEGETABLES</button>
          <button className='btn my-5 px-6'>Breads & Bakery</button>
          <button className='btn'>BREAKFAST & DAIRY</button>
        </div>
      </div>

      <div className="lg:col-span-3">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
         {
            products.map((product)=>{
               return(
                <>
                 <li key={product.productNamr} className='border'>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src={product.productImg}
                    className=" transition duration-500 group-hover:scale-105 "
                  />
    
                  <div className="relative bg-white pt-3">
                    <h3
                      className="text-lg m-3 text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                     {product.productName}
                    </h3>
                    <div className='flex ml-3'>
                        <Star></Star>
                        <Star></Star>
                        <Star></Star>
                        <Star></Star>
                        <Star></Star>
                    </div>
    
                    <p className="m-3 font-bold">
                     
                      <span className="tracking-wider text-gray-900"> Price: {product.Price} </span>
                    </p>
                    <div className="card-actions justify-between m-3">
          <button className="btn btn-sm bg-[#6EB356] px-5 border-0">Add to Cart</button>
            
          </div>
                  </div>
                </a>
              </li>
                </>
               )
            })
         }

       
        </ul>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default ProductCard;