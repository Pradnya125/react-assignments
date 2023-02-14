import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductList";

const ProductDetails =()=>{

     const params = useParams();
     //console.log("params", params.prodId)

     const {productDetails}= useProductDetails(params.prodId)
    return(
        <div className="border text-center p-2 ">
           <div>{productDetails.title}</div>  
           <img className="w-10 m-auto" src={productDetails.image} alt='Product'/>
           <div>{productDetails.description}</div>
           <div>Price - {productDetails.price}</div>
           {/* <div>{productDetails.rating.rate} star</div> */}
           <button className="bg-green-500 text-white p-2"> Add to Cart</button>
        </div>
    )

}
export default ProductDetails;