import React,{useState, useEffect} from "react";

import axios, { all } from "axios";
import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
 useEffect(() => {
    
  const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/allPositions");
        setAllPositions(response.data);
      } catch (err) {
        console.error("Error fetching positions:", err.message);
      }
    };

    fetchData();
  }, []);

//     const symbols = positions.map(pos => pos.name).join(',');
//     const liveDataRes = await axios.get(`http://localhost:3002/api/live-stocks?symbols=${symbols}`);
//     const livePrices = liveDataRes.data;

//     // Merge live prices into positions
//     const enriched = positions.map(pos => {
//       const live = livePrices.find(lp => lp.name === pos.name);
//       return {
//         ...pos,
//         price: live?.price || 0,
//         day: live?.day || "N/A"
//       };
//     });

//     setAllPositions();
//   };

//   fetchLiveData();
// }, []);

  


   return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;