import {useParams} from 'react-router-dom';

const ProductDetails =()=>{

    const params = useParams();
    console.log("params", params.id)
    return(
        <div>
            
        </div>
    )

}
export default ProductDetails;