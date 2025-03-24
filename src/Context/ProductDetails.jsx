import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import { Link, useParams } from "react-router-dom";
import Footer from "../Component/Footer";

function ProductDetails() {
  const { products, addToCart } = useContext(DataContext);
  const { id } = useParams();
  
  const [productDetails, setProductDetails] = useState(null); 

  const handleAddCart = (productDetails) => {
    addToCart(productDetails);
  };

  useEffect(() => {
    // البحث عن المنتج باستخدام id
    const foundProduct = products.find((product) => product.id == id);
    setProductDetails(foundProduct); 
  }, [id, products]);


  if (!productDetails) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 text-center ">
            <img
              src={productDetails.image}
              alt="product"
              style={{ height: "450px" , width:"100%"}}
            />
          </div>
          <div className="col-md-6">
            <div className="details mt-4">
              <h2 className="text-center mb-3">{productDetails.title}</h2>
              <p className="h5 mb-2">Price: {productDetails.price} $</p>
              <h4 className="mb-4">{productDetails.category}</h4>

              <Link to="/cart">
                <button
                  className="btn btn-primary w-100 mb-3"
                  onClick={() => handleAddCart(productDetails)}
                >
                  Buy Now
                </button>
              </Link>

              <hr />
              <h3>Product Details</h3>
              <p>{productDetails.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
