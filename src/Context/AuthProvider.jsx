import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
const AuthProvider = ({children}) => {
     const [products , setProducts] = useState([]);
     
     useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
     },[])
     const productInfo = {
        products 
     }
    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default AuthProvider;