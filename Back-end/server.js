const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require('path')

const app = express();


//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// server static files (frontend)

if ( process.env.NODE_ENV === "production"){

  app.use(express.static(path.join(__dirname,'../Front-end/dist')))
}

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../Front-end/dist', 'index.html'))
})
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
