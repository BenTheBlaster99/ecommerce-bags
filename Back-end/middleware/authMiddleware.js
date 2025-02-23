const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(" ")[1];
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.findById(decoded.id).select("-password");
      console.log("Auth middleware: User authenticated", req.user._id);
      next();
    } catch (error) {
      console.error("Auth middleware error:", error);
      res.status(401).json({ message: "Not authorized" });
    }
  }
  if (!token) {
    res.status(401).json({ mesage: "Not authorized, no token" });
  }
};
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log("Admin middleware: User is admin");
    next();
  } else {
    res.status(401).json({ message: "Not authorized as admin" });
  }
};
module.exports = { protect, admin };
