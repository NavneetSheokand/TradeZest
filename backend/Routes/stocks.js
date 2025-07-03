const express = require("express");
const router = express.Router();
const axios = require("axios");

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

// 📈 Get real-time quote
router.get("/quote/:symbol", async (req, res) => {
  const symbol = req.params.symbol.toUpperCase(); // e.g., "AAPL"
  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;

  try {
    const response = await axios.get(url);
    res.json({
      symbol,
      currentPrice: response.data.c,
      high: response.data.h,
      low: response.data.l,
      open: response.data.o,
      previousClose: response.data.pc,
    });
  } catch (error) {
    console.error("Finnhub error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Finnhub" });
  }
});

module.exports = router;
