const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  updateUserProfile,
  registerAdmin
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");
const { validateUser } = require("../middleware/validateMiddleware");

//Public routes
router.post("/register", validateUser, registerUser);
 //router.post("/login", loginUser);
router.post("/register-admin",validateUser,registerAdmin)
//Protected Routes
router.get("/profile", protect, updateUserProfile);
router.put("/profile", protect, validateUser, updateUserProfile);

//admin routes
router.get("/users", protect, admin, getAllUsers);

module.exports = router;
