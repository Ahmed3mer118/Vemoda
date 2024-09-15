import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import "./context.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function Cart() {
  const { cart, changeQuantity } = useContext(DataContext);
  const [Total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    let total = 0;
    setLoading(false);
    cart.forEach((product) => {
      total += product.price * product.count;
    });
    setLoading(true);
    setTotal(total);
  }, [cart, changeQuantity]);
  const handleDiscount = () => {
    let getDiscount = Total - parseFloat(discount);
    setDisabled(false);
    if (getDiscount >= 0) {
      setTotal(getDiscount);
    } else {
      alert("don't have dicount");
    }
  };
  const handleBuyNow = ()=>{
    if(cart.length == 0){
      toast.error("error Not Product ");
    }else{
      navigate("/checkout")
    }
  }

  return (
    <>
    <div className="cart container">
         <ToastContainer position="top-center" />
      {/* <h2>Cart</h2> */}
      <h5>You have {cart.length} items  </h5>
      <table>
        <thead>
          <tr>
            <th className="border">Product</th>
            <th className="border">Title</th>
            <th className="border">Price</th>
            <th className="border">Count</th>
            <th className="border">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border">
              <td className="border">
                <img src={item.image} alt="product" />
              </td>
              <td className="border">{item.title}</td>
              {/* <td>{item.description}</td> */}
              <td className="border">
                {item.price} {`$`}
              </td>
              <td className="border">
                <button
                  className="btn btn-success m-2"
                  onClick={() => changeQuantity(item.id, item.count + 1)}
                >
                  +
                </button>
                {item.count}
                <button
                  className="btn btn-danger m-2"
                  onClick={() => changeQuantity(item.id, item.count - 1)}
                >
                  -
                </button>
              </td>
              <td className="border">
                {item.price * item.count} {`$`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {!loading && (<div> Loading...</div>)}
        {!cart && (<div> No Product..</div>) }
      <div className="card p-3">
        <h1>Promo Code</h1>
        <div className="discount d-flex m-2">
          <input
            type="text"
            // placeholder="Promo Code"
            readOnly={!disabled}
            placeholder={disabled ? "Promo Code" : "Noting Now Promo Code"}
            className="form-control"
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={handleDiscount}>
            Apply
          </button>
        </div>

        <hr />
        <div className="total">
          <h2>Total: </h2>
          <span>
            {Total} {"$ "}
          </span>
        </div>
        {/* <Link to="/checkout"> */}
          <button className="btn btn-primary w-100 m-1" onClick={handleBuyNow}>Buy Now</button>
        {/* </Link> */}
      </div>
    </div>
            {!cart  && <Footer /> }
      
      </>
  );
}

export default Cart;
