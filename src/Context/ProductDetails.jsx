import React, { useContext } from "react";
import { DataContext } from "./Context";
import { Link, useParams } from "react-router-dom";
import Footer from "../Component/Footer";

function ProductDetails() {
  const { products, addToCart } = useContext(DataContext);
  const { id } = useParams();
  // console.log(id)
  const handleAddCart = (productDetails) => {
    // console.log(productDetails)
    addToCart(productDetails);
  };
  const productDetails = products.find((product) => product.id == id);
  //   console.log(productDetails);
  return (
    <>
     <div className="product-details">
      <img src={productDetails.image} alt="product" />
      <div className="details">
        <h2>{productDetails.title}</h2>
        <span>Price : {productDetails.price} $</span>
        <h3>{productDetails.category}</h3>
        <Link to="/cart">
          <button
            className="btn btn-primary  m-2"
            onClick={() => handleAddCart(productDetails)}
          >
            Buy Now
          </button>
        </Link>
        <hr />
        <h2>Product Details</h2>
        <p>{productDetails.description}</p>
      </div>
    </div>
    <Footer />
    </>
  
   
  );
}

export default ProductDetails;
