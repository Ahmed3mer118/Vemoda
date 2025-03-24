import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Component/Footer";

function ProductCategories() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productCategies, setProductCategies] = useState([]);

  const { addToCart } = useContext(DataContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setProductCategies(res.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching products for category ${category}:`, error);
        setLoading(false);
      });
  }, [category]);

  const handleAddCart = (product) => {
    toast.success("Added to Cart");
    addToCart(product);
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container">
        <h1 className="text-center my-4">Product Categories</h1>
        
        <div className="mb-4">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <Link to="/products" className="btn btn-primary">
                All Products
              </Link>
            </li>
            {productCategies.map((pro) => (
              <li className="list-inline-item" key={pro}>
                <NavLink
                  to={`/products/${pro}`}
                  className="btn btn-outline-secondary mx-2"
                >
                  {pro}
                </NavLink>
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
                <div className="card p-3">
                  <Link to={`/products/details/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top"
                      style={{height:"200px"}}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.slice(0, 17)}</h5>
                    <p className="card-text">{product.price} $</p>
                    <p className="card-text"><strong>Category:</strong> {product.category}</p>
                    <p className="card-text">
                      <strong>Rating:</strong> {product.rating.rate} | <strong>Count:</strong> {product.rating.count}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductCategories;
