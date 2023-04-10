import React from 'react';

const Footer = () => {
    return (
        <div className='pt-20'>
           <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <h2 className='text-2xl font-bold'>Food<span className='text-orange-400'>Vally</span></h2>
    <p>Food Valy Industries Ltd.<br/>Providing reliable tech since 2000</p>
  </div> 
  <div>
    <span className="footer-title">Contract Us</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Sign Up</a> 
    <a className="link link-hover">Sign In</a> 
    <a className="link link-hover">Contract Us</a>
  </div> 
  <div>
    <span className="footer-title">Our Services</span> 
    <a className="link link-hover">Agriculture Products</a> 
    <a className="link link-hover">Organic Products</a> 
    <a className="link link-hover">Delivery Services</a> 
    <a className="link link-hover">Meat And Sea Foods</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;