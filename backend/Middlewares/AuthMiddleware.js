const User = require("../Model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    req.id = decoded.id; // Set req.id so it can be used in the next route
    next(); // ✅ This lets the request proceed to the actual API like /newOrder

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
