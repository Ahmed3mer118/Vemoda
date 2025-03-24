import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function Cart() {
  const { cart, changeQuantity } = useContext(DataContext);
  const [Total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

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
      alert("Don't have discount");
      setDiscount("")
    }
  };

  const handleBuyNow = () => {
    if (cart.length === 0) {
      toast.error("Error: No Products in Cart");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      <div className="cart container mt-4">
        <ToastContainer position="top-center" />
        <h5 className="mb-4">You have {cart.length} items</h5>

        <div className="d-flex justify-content-between flex-wrap">
          <table className="table ">
          {cart.length === 0 && <div className="h5">No Products in Cart</div>}
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="product" width="50" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} $</td>
                  <td>
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
                  <td>{item.price * item.count} $</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="card p-3">
            <h1 className="mb-4">Promo Code</h1>

            <div className="discount d-flex align-items-center mb-3">
              <input
                type="text"
                readOnly={!disabled}
                placeholder={
                  disabled  ? "Enter Promo Code" : "No Promo Code Available"
                }
                className="form-control"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <button
                className="btn btn-primary ms-2"
                onClick={handleDiscount}
                disabled={!discount || cart.length == 0} 
              >
                Apply
              </button>
            </div>

            <hr />

            <div className="total d-flex justify-content-between">
              <h2>Total:</h2>
              <span className="h4">{Total} $</span>
            </div>

            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleBuyNow}
              disabled={cart.length === 0} // Disable if no items in cart
            >
              Buy Now
            </button>
          </div>
        </div>
        {!loading && <div>Loading...</div>}
       
      </div>

      {cart.length === 0 && <Footer />}
    </>
  );
}

export default Cart;
