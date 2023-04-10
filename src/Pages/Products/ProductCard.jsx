import React, { useContext, useState ,useMemo} from 'react';
import { ProductContext } from '../../Context/AuthProvider';
import Star from '../Home/Star';
import toast, { Toaster } from 'react-hot-toast';

const ProductCard = () => {
    const {products , addTocard} = useContext(ProductContext);
    const [Selectedcategory , setCategory] = useState("")
   const handleClick =(e)=>{
    e.preventDefault()
    const msg = e.target.value;
      setCategory(msg)
   }

   const addtocard = (product)=>{
    toast.success('Successfully Add to cart!')
        addTocard.push(product)
   }
 // Function to get filtered list
 function getFilteredList() {
  // Avoid filter when selectedCategory is null
  if (!Selectedcategory ) {
    return products;
  }else if(Selectedcategory == "ALL"){
        return products
  }
  return products.filter((item) => item.category === Selectedcategory);
}
var filteredList = useMemo(getFilteredList, [Selectedcategory, products]);


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
      <div className="space-y-4 ">
       

        <div className='grid grid-cols-1'>
          <p className="block text-xs font-medium text-gray-700">Filters by Catrgory</p>

          <button className='btn mt-5 btn-sm' onClick={handleClick}  value="ALL">ALL</button>
          <button className='btn mt-5 btn-sm' onClick={handleClick}  value="FRUIT & VEGETABLES">FRUIT & VEGETABLES</button>
          <button className='btn my-5 px-6 btn-sm' onClick={handleClick}  value="Breads & Bakery">Breads & Bakery</button>
          <button className='btn btn-sm' onClick={handleClick} value="BREAKFAST & DAIRY">BREAKFAST & DAIRY</button>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
         {
            filteredList.map((product)=>{
               return(
                <div className="card border-gray-100 border-2 relative w-full max-h-[400px]  shadow-xl">
                <figure className="">
                  <img src={product.productImg} className="rounded " alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                  <h2 className="card-text font-bold">
                    {product.productName}
                   
                  </h2>
                  <div className='flex'><Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star></div>
                  <p className='text-[#70e24a] font-bold'>IN STOCK</p>
                  <p>Price: $ {product.Price}</p>
                  
                  <div className="card-actions justify-between">
                  <a className="btn btn-sm bg-[#6EB356] px-5 border-0" onClick={()=> addtocard (product)}>Add to Cart</a>
                    
                  </div>
                </div>
              </div>
               )
            })
         }

       
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default ProductCard;