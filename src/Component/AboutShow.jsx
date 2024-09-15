import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
// import AboutImage from "";
import { FaFacebook } from "react-icons/fa";

function AboutShow() {
  return (
    <>
      <div className="about">
        <h1>About Our Company</h1>
      </div>
      <div className="details-about">
        <img
          src="https://themewagon.github.io/hexashop/assets/images/about-left-image.jpg"
          alt="about-image"
        />
        <div className="about-details">
          <h2>About Us & Our Skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>
          <div className="social-about">
            <span>
              <FaFacebook />
            </span>
            <span>
              <BsWhatsapp />
            </span>
            <span>
              
              <BsInstagram />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutShow;
