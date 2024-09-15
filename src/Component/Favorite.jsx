import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { FcDeleteDatabase } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";

function Favorite() {
  const [productFave, setProductFave] = useState(
    JSON.parse(localStorage.getItem("favoriteProduct")) || []
  );

  const { addToCart } = useContext(DataContext);

  //   console.log(productFave);
  const handleAddCart = (product) => {
    addToCart(product);
  };
  const handleHeartDelete = (product) => {
    // console.log(product)
    // clone
    const productFavorite = [...productFave];
    // edit
    const newProductFavorite = productFavorite.filter(
      (val) => val.id !== product.id
    );
    // update
    setProductFave(newProductFavorite);
  };
  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(productFave));
  }, [productFave]);
  return (
    <>
      <h1 className="text-center m-2">Your Favorite Products</h1>

      <div className="products-favorite container mt-2">
        {productFave.map((proFave) => (
          <div className="product-box" key={proFave.id}>
            <CgRemove
              className="icon-heart"
              onClick={() => handleHeartDelete(proFave)}
            />
            <Link to={`/products/details/${proFave.id}`}>
              <img src={proFave.image} alt="product" />
            </Link>
            <div className="details">
              <h5>{proFave.title}</h5>
              <span>{proFave.price} $</span>
            </div>
            <h2>{proFave.category}</h2>
            {/* <p className="description">{proFave.description}</p> */}
            <p>Rating : {proFave.rating.rate}</p>
            <p> Count : {proFave.rating.count}</p>
            <button
              onClick={() => handleAddCart(proFave)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        ))}
        {!productFave.length && (
          <div className="text-center fs-3">No Product</div>
        )}
      </div>
    </>
  );
}

export default Favorite;
