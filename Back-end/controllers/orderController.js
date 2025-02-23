const Order = require("../models/Order");

//get all orders

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .populate("items.product", "name price");
    res.json(orders);
  } catch (error) {
    console.error("Error fetchin orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

//creating new order

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, shippingAddredss } = req.body;
    const order = new Order({
      user: req.body.userId, //will be replaced with authenticated user id later on
      items,
      totalAmount,
      shippingAddredss,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(400).json({ message: "Error creating order" });
  }
};

module.exports = { getAllOrders, createOrder };
