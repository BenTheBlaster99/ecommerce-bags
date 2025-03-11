const express = require("express");
const router = express.Router();
const { validateProduct } = require("../middleware/validateMiddleware");
const upload = require("../utils/mutler")

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");


//public route anyone can view products
router.get("/", getAllProducts);

//protected admin routes only for admin
router.post("/", protect, admin,upload.array("media",5), createProduct, validateProduct);
router.put("/:id", protect, admin,upload.array("media",5), updateProduct, validateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;
