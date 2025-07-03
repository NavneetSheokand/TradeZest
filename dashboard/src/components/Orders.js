import React, { useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const { allOrders, fetchOrders } = useContext(GeneralContext);
 
  useEffect(() => {
    fetchOrders(); 
     console.log("Rendering Orders:", allOrders);// fetch once on load
  }, []);
  
  return (
    <div className="orders">
      <div className="no-orders">
        <h3 className="title">Orders ({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(allOrders) &&
                allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td
  className={stock.mode.toLowerCase() === "buy" ? "buy" : "sell"}
  style={{
    color: stock.mode.toLowerCase() === "buy" ? "green" : "red",
    fontWeight: "bold",
    backgroundColor: "white",
  }}
>
  {stock.mode}
</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
