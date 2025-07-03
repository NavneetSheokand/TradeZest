const mongoose = require("mongoose");
const { OrdersSchema } = require("../Schemas/OrdersSchema");

const OrdersModel = mongoose.model("Order", OrdersSchema); // ✅ No 'new'

module.exports = { OrdersModel };
