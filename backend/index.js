require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const authRoute = require("./Routes/AuthRoute");
const stockRoutes = require("./Routes/stocks");
const {userVerification} = require("./Middlewares/AuthMiddleware");

const { HoldingsModel } = require("./Model/HoldingsModel");
const { PositionsModel } = require("./Model/PositionsModel");
const { OrdersModel } = require("./Model/OrdersModel");
const User = require("./Model/UserModel");


const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

mongoose.connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.use("/api", stockRoutes);
app.use("/", authRoute);


app.get("/me", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("username");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json({ username: user.username });
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
});

app.post("/verify", (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    res.json({ success: true, user: decoded });
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});


app.get('/allHoldings', async (req, res) => {
  const userId = req.id;
  const allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  const userId = req.id;
  const allPositions = await PositionsModel.find();
  res.json(allPositions);
});

app.get('/allOrders', userVerification, async (req, res) => {
  try {
    const userId = req.id;
    const allOrders = await OrdersModel.find({ user: userId});
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/newOrder", userVerification, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.id;

  console.log("New Order Request:", { name, qty, price, mode, userId });

  try {
  
    const newOrder = new OrdersModel({ name, qty, price, mode, user: userId });
    await newOrder.save();
    console.log("Order Saved");

    const existing = await HoldingsModel.findOne({ name, user: userId });

 
    if (mode === "BUY") {
      if (existing) {
        const totalQty = existing.qty + qty;
        const totalValue = (existing.qty * existing.avg) + (qty * price);
        const newAvg = totalValue / totalQty;

        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = price;

     
        const curVal = price * totalQty;
        const invested = newAvg * totalQty;
        const pnl = curVal - invested;
        const net = ((price - newAvg) / newAvg * 100).toFixed(2);

        existing.net = net;
        existing.day = "0"; 
        await existing.save();
        console.log("Holding Updated (Buy)");
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0",
          day: "0",
          user: userId,
        });
        await newHolding.save();
        console.log("New Holding Created");
      }
    }

    
    else if (mode === "SELL") {
      if (!existing) {
        return res.status(400).json({ message: "You don't own this stock." });
      }

      if (existing.qty < qty) {
        return res.status(400).json({ message: "Not enough quantity to sell." });
      }

      existing.qty -= qty;

      if (existing.qty === 0) {
        await HoldingsModel.deleteOne({ _id: existing._id });
        console.log("Holding removed (Qty 0)");
      } else {
     
        const curVal = price * existing.qty;
        const invested = existing.avg * existing.qty;
        const pnl = curVal - invested;
        const net = ((price - existing.avg) / existing.avg * 100).toFixed(2);

        existing.price = price;
        existing.net = net;
        existing.day = "0"; 
        await existing.save();
        console.log("Holding updated (Sell)");
      }
    }

    res.send("Order processed and holdings updated.");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Failed to process order" });
  }
});


app.listen(3002, () => {
  console.log(`App started on port ${PORT}`);
});

