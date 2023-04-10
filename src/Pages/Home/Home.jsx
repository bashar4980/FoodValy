import React from "react";
import Category from "./Category";
import Features from "./Features";
import Review from "./Review";
import Newslatter from "./Newslatter";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="hero  w-100  bg-base-200">
  <div className="hero-content  flex-col lg:flex-row lg:gap-x-20">
    
    <div className="max-w-1/2"> 
      <h1 className=" font-bold">Genuine 100% Organic Products</h1>
      <h1 className=" text-3xl lg:text-5xl font-bold">Online Freash <br></br> Grocery <br></br>Products</h1>
      
      <p className="py-6">Assertively targer market-driven intellectual capital with<br></br> worldwide human capital holistic</p>
      <Link to="/products" className="btn bg-[#ee9f27] hover:bg-[#6EB356] px-5 border-0">Shop Now</Link>
      <Link to="/about" className="btn bg-[#6EB356] hover:bg-[#ee9f27] px-5 border-0 ml-5">About us</Link>
    </div>
 
   <img src="https://grostore-wp.themetags.com/wp-content/uploads/2023/03/fruits.png " className=" max-w-[400px] rounded-lg " />
   
  </div>
</div>
<Category></Category>
<Features></Features>
<Newslatter></Newslatter>
<Review></Review>
    </>
  );
}
