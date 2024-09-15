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

  const {addToCart} = useContext(DataContext)
  //   links
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      // console.log(res.data);
      setProductCategies(res.data);
    });
  }, []);
  // category
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(
          `Error fetching products for category ${category}:`,
          error
        );
      });
    setLoading(false);
  }, [category]);
  const handleAddCart = (product) => {
    // console.log(product.id)
    toast.error("Succes Add To Cart")
    addToCart(product);
  };

  return (
    <>
    {/* <ToastContainer /> */}
    <ToastContainer position="top-center" />
      <h1 className="text-center m-2">Product Categories</h1>
      <li className="d-flex p-2 m-2  text-center category-item">
        <Link to="/products" className="category-link">
          All Product
        </Link>
        {productCategies.map((pro) => (
          <NavLink
            key={Math.random()}
            to={`/products/${pro}`}
            className="category-link"
          >
            {pro}
          </NavLink>
        ))}
      </li>
      <div className="products container">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <Link to={`/products/details/${product.id}`}>
              <img src={product.image} alt="product" />
            </Link>
            <div className="details">
              <h5>{product.title.slice(0,17)}</h5>
              <span>{product.price} $</span>
            </div>
            <h2>{product.category}</h2>

            <p>Rating : {product.rating.rate}</p>
            <p> Count : {product.rating.count}</p>
            <button onClick={() => handleAddCart(product)}>Add To Cart</button>
          </div>
        ))}
        {loading && <h1 className="text-primary mt-2">Loading....</h1>}
      </div>
      <Footer />
    </>
  );
}

export default ProductCategories;
