import React from "react";
import { Link } from "react-router-dom";
// import '../../App.css'

const Category = () => {
  return (
    <div>
      <section className="p-6" id="category">
        <h2 className="text-bold text-lg text-orange-400 font-bold py-5">
          Our Best Category
        </h2>
        <div className="grid grid-cols-3 gap-10 ">
            <div className="border-gray-100 border-2 pb-2 ">
            <img
                  src="https://i.ibb.co/YPN0cZJ/Fresh-Organic-Broccoli-Crowns.jpg"
                  alt="Shoes"
                />
              <p className="font-bold text-center">FRUIT & VEGETABLES</p>
              <div className="card-actions justify-center m-3">
          <Link to="/products" className="btn btn-sm bg-[#6EB356] px-5 border-0">Buy Now</Link>
            
          </div>
            </div>
            <div className="border-gray-100 border-2">
            <img
                  src="https://i.ibb.co/VHD1zVq/Lemon-Cream-Crunch-Cookies.jpg"
                  alt="Shoes"
                />
                <p className="font-bold text-center">Breads & Bakery</p>
                <div className="card-actions justify-center m-3">
          <Link to="/products" className="btn btn-sm bg-[#6EB356] px-5 border-0">Buy Now</Link>
            
          </div>
            </div>

            <div className="border-gray-100 border-2">
            <img
                  src="https://i.ibb.co/QXCVjqw/Blueberries-1-Pint-Package.jpg"
                  alt="Shoes"
                />
               <p className="font-bold text-center">BREAKFAST & DAIRY</p>
               <div className="card-actions justify-center m-3">
          <Link to="/products" className="btn btn-sm bg-[#6EB356] px-5 border-0">Buy Now</Link>
            
          </div>
            </div>
        </div>
        {/* <div className="  grid justify-center grid-cols-2 text-bold  gap-5 lg:grid-cols-3">
         
            <div className="max-w-[200px] h-60  border-gray-100 border-2">
              <figure>
                <img
                  src="https://i.ibb.co/YPN0cZJ/Fresh-Organic-Broccoli-Crowns.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>FRUIT & VEGETABLES</p>
              </div>
            </div>
       
       
          <div className="max-w-[200px] h-60  border-gray-100 border-2">
              <figure>
                <img
                  src="https://i.ibb.co/QXCVjqw/Blueberries-1-Pint-Package.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>BREAKFAST & DAIRY</p>
              </div>
            </div>
    
    
          <div className=" max-w-[200px] h-60  border-gray-100 border-2">
              <figure>
                <img
                  src="https://i.ibb.co/VHD1zVq/Lemon-Cream-Crunch-Cookies.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>Breads & Bakery</p>
              </div>
            </div>
 
        </div> */}
      </section>
    </div>
  );
};

export default Category;
