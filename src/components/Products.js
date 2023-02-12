import { Link, useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const navigate = useNavigate();

  //  const productDetailsHandler=()=>{
  //     navigate(`productDetails/${product.id}`);
  //  }
  return (
    <div   
      className="border-2 border-slate-500 w-44 text-center m-2"
    >
      <Link to={`productDetails/${product.id}`}>
        <img
          className="w-20 mx-auto my-0 p-1"
          src={product.image}
          alt="product"
        />
        <p>{product.title}</p>
        <p>Price:{product.price}</p>
      </Link>
    </div>
  );
};
export default Products;
