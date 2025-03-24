import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import axios from "axios";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProductWomen() {
  const { addToCart, addProductToFavorite } = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  const handleAddCart = (product) => {
    addToCart(product);
  };

  const handleHeart = (product) => {
    addProductToFavorite(product);
  };

  return (
    <>
      <h1 className="text-center m-2">Products Women</h1>
      <div className="products container">
        {loading ? (
          <h1 className="text-primary mt-2">Loading...</h1>
        ) : (
          products.map((product) => (
            <div className="product-box" key={product.id}>
              <BiHeart
                className="icon-heart"
                onClick={() => handleHeart(product)}
              />
              <Link to={`/products/details/${product.id}`}>
                <img src={product.image} alt="product"  style={{height:"200px"}} />
              </Link>
              <div className="details">
                <h5>{product.title.slice(0, 17)}</h5>
                <span>{product.price} $</span>
              </div>
              <h2>{product.category}</h2>
              <p>Rating: {product.rating.rate}</p>
              <p>Count: {product.rating.count}</p>
              <button onClick={() => handleAddCart(product)}>Add To Cart</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductWomen;
