import React from "react";
import BestSeller from "./BestSeller";
import AboutShow from "./AboutShow";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import Products from "../Context/Products";

function HomePage() {
  return (
    <>
      <div
        className="home-image text-center text-light p-5"
        style={{
          backgroundImage: "url('/images/bg-2.webp')",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <div className="content rounded" style={{
          backdropFilter:'blur(30px)',
          padding:"30px",
          width:"fit-content",
          margin:"auto",
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
          
        }}>
          <h1 className="text-white">Fashion Redefined</h1>
          <p className="text-dark">Trendsetting Styles for Men, Women & Kids</p>

          <Link to="/products">
            <button className="btn btn-light">Show All Products</button>
          </Link>
        </div>
      </div>
      <BestSeller />
      <AboutShow />
      <Products />
      {/* <ProductMen /> */}
      {/* <ProductWomen /> */}
      <Footer />
    </>
  );
}

export default HomePage;
