import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { DataContext } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";

function BestSeller() {
  const [productSeller, setProductSeller] = useState([]);
  const { addToCart } = useContext(DataContext);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=4").then((res) => {
      setProductSeller(res.data);
    });
  }, []);
  const handleAddCart = (product) => {
    addToCart(product);
    toast.success("Added to Cart");
    return
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Best Seller</h1>
        <Link to="/products" className="btn btn-outline-primary">
          See All
        </Link>
      </div>
      <div className="row">
        {productSeller.map((pro) => (
          <div className="col-md-3 mb-4" key={pro.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                {/* <CiHeart className="text-danger position-absolute top-0 end-0 m-3" /> */}
                <img
                  src={pro.image}
                  alt="product-seller"
                  className="card-img-top"
                  style={{ height: "200px" }}
                />
                <h4 className="mt-3">{pro.title.slice(0, 17)}</h4>
                <span>{pro.price} EG</span>
                <button
                  className="btn btn-primary mt-2 w-100"
                  onClick={() => handleAddCart(pro)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
