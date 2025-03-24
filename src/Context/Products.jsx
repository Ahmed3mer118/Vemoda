import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiHeart } from "react-icons/bi";
import Footer from "../Component/Footer";
import { toast, ToastContainer } from "react-toastify";

function Products() {
  const { products, addToCart, addProductToFavorite } = useContext(DataContext);
  const [loading, setLoading] = useState(true); // Setting loading to true initially.
  const [productCategies, setProductCategies] = useState([]);

  useEffect(() => {
    // Fetch product categories on component mount
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setProductCategies(res.data);
        setLoading(false); // Turn off loading once the categories are fetched
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Failed to fetch categories"); // Error handling
      });
  }, []);

  const handleAddCart = (product) => {
    addToCart(product);
    toast.success("Added to Cart");
  };

  const handleHeart = (product) => {
    addProductToFavorite(product);
    toast.success("Added to Favorites");
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container mt-5 mb-3">
        <h1 className="text-center my-4">Product Categories</h1>

        <div className="mb-4">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <Link to="/products" className="btn btn-primary">
                All Products
              </Link>
            </li>
            {productCategies.map((category) => (
              <li className="list-inline-item" key={category}>
                <Link
                  to={`/products/${category}`}
                  className="btn btn-outline-secondary mx-2"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          {loading ? (
            <h3 className="text-center text-primary w-100">Loading...</h3>
          ) : (
            products.map((product) => (
              <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                <div className="card">
                  <div className="card-body">
                    <BiHeart
                      className="icon-heart position-absolute top-0 end-0 p-2"
                      onClick={() => handleHeart(product)}
                    />
                    <Link to={`/products/details/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top"
                        style={{ height: "200px" }}
                      />
                    </Link>
                    <h5 className="card-title">{product.title.slice(0, 17)}</h5>
                    <p className="card-text">{product.price} $</p>
                    <p className="card-text">
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> {product.rating.rate} |{" "}
                      <strong>Count:</strong> {product.rating.count}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success "
                        onClick={() => handleAddCart(product)}
                      >
                        Add to Cart
                      </button>
                      <Link to={`/products/details/${product.id}`}>
                        <button className="btn btn-primary ">Show More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    
    </>
  );
}

export default Products;
