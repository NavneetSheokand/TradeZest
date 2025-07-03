import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const {
    fetchOrders,
    fetchHoldings,
    closeBuyWindow, // ✅ Extract this correctly
  } = useContext(GeneralContext);

  const handleBuyClick = () => {
  console.log("Buying stock:", { name: uid, qty: stockQuantity, price: stockPrice });

  axios.post("http://localhost:3002/newOrder", {
    name: uid,
    qty: stockQuantity,
    price: stockPrice,
    mode: "BUY",
  }, { withCredentials: true })
  .then((response) => {
    console.log("Response from backend:", response.data);
    fetchOrders();
    fetchHoldings();
    closeBuyWindow(); // You might want to call closeBuyWindow from context
  })
  .catch((error) => {
    console.error("Buy error:", error.response ? error.response.data : error.message);
  });
};


  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ correct call
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
