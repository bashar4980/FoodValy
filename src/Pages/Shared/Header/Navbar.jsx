import React, { useState } from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
 

  const menuitem = (
    <>

   <li className="text-xl font-bold ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl font-bold ">
        <Link to="/products">Products</Link>
      </li>
      <li className="text-xl font-bold ">
        <Link to="/about">About</Link>
      </li>

      <li className="text-xl font-bold ">
        <Link to="/booking">Booking</Link>
      </li>
      
      
      
      <li className="text-xl font-bold ">
        <Link to="/contract">Contract</Link>
      </li>
      
      
      
    </>
  );

  return (
    <div className="navbar bg-base-200 flex justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuitem}

        </ul>
      </div>
      <a href="/" className="btn btn-ghost normal-case font-bold  text-xl">
       Food<span className="text-orange-400">Valy</span>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {menuitem}
      </ul>
    </div>


 
  </div>
  );
};

export default Navbar;
