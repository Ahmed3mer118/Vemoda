import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo Section */}
          <div className="col-lg-3 col-md-4 mb-3">
            <h1 className="fw-bold">Vemoda</h1>
          </div>

          {/* Shopping & Categories */}
          <div className="col-lg-3 col-md-4 mb-3">
            <h4 className="text-white">Shopping & Categories</h4>
            <ul className="list-unstyled ">
              <li><Link to="/mens" className="text-muted text-decoration-none">Men’s Shopping</Link></li>
              <li><Link to="/womens" className="text-muted text-decoration-none">Women’s Shopping</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-4 mb-3">
            <h4 className="text-white">Useful Links</h4>
            <ul className="list-unstyled ">
              <li><Link to="/" className="text-muted text-decoration-none">Homepage</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/help" className="text-muted text-decoration-none">Help</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help & Information */}
          <div className="col-lg-3 col-md-4 mb-3">
            <h4 className="text-white">Help & Information</h4>
            <ul className="list-unstyled ">
              <li><Link to="/faq" className="text-muted text-decoration-none">FAQ's</Link></li>
              <li><Link to="/shipping" className="text-muted text-decoration-none">Shipping</Link></li>
              <li><Link to="/tracking" className="text-muted text-decoration-none" >Tracking ID</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-lg-12 text-center border-top pt-3">
            <div className="social-icons mb-2">
              <a href="#" className="text-light mx-2"><FaFacebook size={20} /></a>
              <a href="#" className="text-light mx-2"><FaTwitter size={20} /></a>
              <a href="#" className="text-light mx-2"><FaInstagram size={20} /></a>
            </div>
            <p className="mb-0">&copy; {new Date().getFullYear()} amer73090@gmail.com</p>
            <p>Design by <span className="fw-bold">Ahmed Amer</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
