import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-10">
            <div className="logo">
              <h1>Vemoda</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10">
            <h4 className="text-light">Shopping &amp; Categories</h4>
            <ul>
              <li className="text-light">Men’s Shopping</li>
              <li className="text-light">Women’s Shopping</li>
              <li className="text-light"></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10">
            <h4 className="text-light">Useful Links</h4>
            <ul>
              <li>Homepage</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10">
            <h4 className="text-light">Help &amp; Information</h4>
            <ul>
              <li>Help</li>
              <li>FAQ's</li>
              <li>Shipping</li>
              <li>Tracking ID</li>
            </ul>
          </div>
          <div className="col-lg-12 text-center border-top pt-2">
            <div className="under-footer">
              <span>Copyright © amer73090@gmail.com </span>
              <br />
              Design: <span>Ahmed Amer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
