const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();


//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

//mongoDB connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

//test route
app.get("/test", (req, res) => {
  res.json({ message: "Server is working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Available routes:");
  console.log(" POST /api/users/register");
  console.log(" POST /api/users/login");
});
