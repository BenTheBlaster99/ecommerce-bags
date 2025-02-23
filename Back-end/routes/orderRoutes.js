const express = require("express");
const router = express.Router();

const { getAllOrders, createOrder } = require("../controllers/orderController");

//getting all orders (admin only)
router.get("/",getAllOrders);
//create new order
router.post("/", createOrder);

module.exports = router;
