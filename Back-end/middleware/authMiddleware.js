const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  console.log("Auth Headers:", req.headers.authorization);

  if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {
    console.log("No token provided or invalid format");
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Get token from header
    token = req.headers.authorization.split(" ")[1];
    console.log("Extracted token:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    // Get user from token
    req.user = await User.findById(decoded.id).select("-password");
    console.log("Found user:", req.user?._id);

    if (!req.user) {
      console.log("No user found with token ID");
      return res.status(401).json({ message: "Not authorized" });
    }

    console.log("Auth middleware: User authenticated", req.user._id);
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(401).json({ message: "Not authorized" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log("Admin middleware: User is admin");
    next();
  } else {
    console.log("User role:", req.user?.role);
    res.status(401).json({ message: "Not authorized as admin" });
  }
};

module.exports = { protect, admin };
