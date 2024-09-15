import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import ProductCategies from "./ProductCategies";
import axios from "axios";
import { BiHeart } from "react-icons/bi";
import Footer from "../Component/Footer";

function Products() {
  const { products, addToCart ,addProductToFavorite } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const [productCategies, setProductCategies] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setProductCategies(res.data);
      setLoading(false);
    });
  }, []);

  const handleAddCart = (product) => {
    // console.log(product.id)
    addToCart(product);
  };
  const handleHeart = (product) => {
    // console.log(product);
    addProductToFavorite(product)
  };
  return (
    <>
      <h1 className="text-center m-2">Products Categories</h1>
      <li className="d-flex p-2 m-2  text-center category-item">
        <Link to="/products" className="category-link">
          All Product
        </Link>
        {productCategies.map((pro) => (
          <Link
            key={Math.random()}
            to={`/products/${pro}`}
            className="category-link"
          >
            {pro}
          </Link>
        ))}
      </li>

      <div className="products container">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <BiHeart
              className="icon-heart"
              onClick={() => handleHeart(product)}
            />
            <Link to={`/products/details/${product.id}`}>
              <img src={product.image} alt="product" />
            </Link>
            <div className="details">
              <h5>{product.title.slice(0,17)}</h5>
              <span>{product.price} $</span>
            </div>
            <h2>{product.category}</h2>
            {/* <p className="description">{product.description}</p> */}
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

export default Products;
