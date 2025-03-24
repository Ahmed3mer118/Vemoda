import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function AboutShow() {
  return (
    <div className="container mt-5">
      <div
        style={{
          position: "relative",
          top:"0",
          left:"0",
          height:"80vh"
        }}
      >
        <img
          src="https://themewagon.github.io/hexashop/assets/images/about-us-page-heading.jpg"
          alt=""
          style={{   height:"100%" ,   width:"100%"}}
        />
        <h1 className="text-center text-white "   style={{ position:"absolute" , top:"50%" ,left:"50%", transform:"translate(-50%,-50%)" , fontWeight:"bold"}}>About Our Company</h1>
      </div>

      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <img
            src="https://themewagon.github.io/hexashop/assets/images/about-left-image.jpg"
            alt="about-image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>About Us & Our Skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="social-about">
            <span className="fs-3">
              <FaFacebook />
            </span>
            <span className="fs-3 mx-3">
              <BsWhatsapp />
            </span>
            <span className="fs-3">
              <BsInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutShow;
