import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { CiHeart } from "react-icons/ci";
import axios from "axios";

function BestSeller() {
  // const [productSeller, setProductSeller] = useState([
  //   {
  //     id: 1,
  //     name: "Groovy ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382642/food7_ssjhpm.jpg",
  //     price: 70 ,
  //   },
  //   {
  //     id: 2,
  //     name: "PROcat ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382643/eat_2_ka3a1u.jpg",
  //     price: 75,
  //   },

  //   {
  //     id: 3,
  //     name: "Blubo ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382643/food6_geoufu.jpg",
  //     price: 80,
  //   },
  //   {
  //     id: 4,
  //     name: "PROcat ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382650/food5_qjzgq4.jpg",
  //     price: 75,
  //   },
  // ]);

  //   https://fakestoreapi.com/products
  //   https://fakestoreapi.com/products/categories

  const [productSeller, setProductSeller] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products?limit=4").then((res)=>{
      setProductSeller(res.data)
    })
  },[])
  return (
    <div className="container bestSeller mt-2 mb-2">
      <div className="head-title ">
        <h1>Best seller</h1>
        <Link to="/products">See All</Link>
      </div>
      <div className="products-seller">
        {productSeller.map((pro) => (
          <div className="product-box-seller" key={pro.id}>
             <CiHeart className="icon-heart" />
            <img src={pro.image} alt="products-seller" />
            {/* <div className="details"> */}
              <h4 className="mt-3">{pro.title.slice(0,17)}</h4>
              <span>{pro.price}  EG</span>
            {/* </div> */}
            <button className="mt-2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
