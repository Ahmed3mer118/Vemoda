import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./Context";
import "./context.css";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Component/Footer";

function ChechOut() {
  const inputRefCardNumber = useRef();
  const inputRefCardData = useRef();
  const { cart } = useContext(DataContext);

  const [Total, setTotal] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  // console.log(inputName.current);
  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.count;
    });

    setTotal(total);
  }, [cart, Total]);

  const handleCartNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input) {
      const formattedInput = input
        .match(/.{1,4}/g)
        .join(" ")
        .substr(0, 19);
      setCardNumber(formattedInput);
    } else {
      setCardNumber("");
    }
  };
  // console.log(cart.length)
  const handleConfirm = () => {
    if (cart.length == 0) {
      toast.error("Error: Not Product ");
    } else if (cardNumber.length < 19 && expirationDate.length < 7) {
      inputRefCardNumber.current.className = " form-control m-2 is-invalid";
      inputRefCardData.current.className = " form-control m-2 is-invalid";
    } else {
      inputRefCardNumber.current.className = " form-control m-2 is-valid";
      inputRefCardData.current.className = " form-control m-2 is-valid";
      toast.success(
        "you order has been confirmed successfully thanks for you time"
      );
      setTimeout(() => {
        window.location.href = "/";
        localStorage.removeItem("cart");
      }, 8000);
    }
  };

  const handleExpirationDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input) {
      const formattedInput = input
        .match(/.{1,2}/g)
        .join(" / ")
        .substr(0, 10);

      setExpirationDate(formattedInput);
    } else {
      setExpirationDate("");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="checkout">
        {/* <Helmet>
      <meta charSet="utf-8" />
        <title>Check Out</title>
      </Helmet> */}
        <form className="container">
          <h2>Checkout</h2>
          <h3>Enter Your Info</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control m-2"
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="form-control m-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control m-2"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="form-control m-2"
            required
          />

          <input type="text" placeholder="City" className="form-control m-2" />
          <input
            type="text"
            placeholder="Address"
            className="form-control m-2"
          />
          <label htmlFor="masterCard" className="m-2 text-success ">
            <b>Master Card:</b>
          </label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            id="masterCard"
            className={" form-control m-2 "}
            maxLength={19}
            value={cardNumber}
            onChange={handleCartNumberChange}
            required
            ref={inputRefCardNumber}
          />

          <input
            type="text"
            placeholder="MM / YY"
            className="form-control m-2"
            maxLength={7}
            value={expirationDate}
            onChange={handleExpirationDateChange}
            required
            ref={inputRefCardData}
          />
          <input
            type="text"
            placeholder="000"
            maxLength={3}
            className="form-control m-2"
            required
          />
          {/* <input type="number" maxLength={3} /> */}
        </form>
        <div className="card">
          {cart.map((product) => (
            <div key={product.id} className="card-body d-flex">
              <img src={product.image} alt="product" />
              <div className="details">
                <h2>{product.name} </h2>

                <h3>Price: {product.price} $</h3>
                <h4>Quantity: {product.count}</h4>
                <h5> Total : {product.price * product.count} $</h5>
              </div>
            </div>
          ))}
          <div className="details card-body">
            <h2>
              Total All: {Total} {"$"}
            </h2>
          </div>

          <button
            className="btn btn-primary m-2 Confirm"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChechOut;
