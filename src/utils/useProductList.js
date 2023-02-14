import {useState, useEffect} from 'react';

const useProductDetails =(productId)=>{
    const [productDetails , setProductDetails]= useState({});  

    useEffect(()=>{
      getProductDetails();
    },[]);

    async function getProductDetails(){
       const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
       const data =  await response.json();   
       setProductDetails(data);
    }

   return {
       productDetails
   }
}

export default useProductDetails;