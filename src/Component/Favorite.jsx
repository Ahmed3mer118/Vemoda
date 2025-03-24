import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { CgRemove } from "react-icons/cg";

function Favorite() {
  const [productFave, setProductFave] = useState(
    JSON.parse(localStorage.getItem("favoriteProduct")) || []
  );
  const { addToCart } = useContext(DataContext);

  const handleAddCart = (product) => {
    addToCart(product);
  };

  const handleHeartDelete = (product) => {
    const productFavorite = [...productFave];
    const newProductFavorite = productFavorite.filter(
      (val) => val.id !== product.id
    );
    setProductFave(newProductFavorite);
  };

  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(productFave));
  }, [productFave]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Favorite Products</h1>
      <div className="row">
        {productFave.map((proFave) => (
          <div className="col-md-3 mb-4" key={proFave.id}>
            <div className="card shadow-sm">
              <CgRemove
                className="icon-heart position-absolute top-0 end-0 m-2"
                onClick={() => handleHeartDelete(proFave)}
              />
              <Link to={`/products/details/${proFave.id}`}>
                <img src={proFave.image} alt="product" className="card-img-top" />
              </Link>
              <div className="card-body">
                <h5>{proFave.title}</h5>
                <span>{proFave.price} $</span>
                <button onClick={() => handleAddCart(proFave)} className="btn btn-primary mt-2 w-100">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {!productFave.length && (
          <div className="text-center fs-3 w-100">No Product</div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
