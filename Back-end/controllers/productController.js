const Product = require("../models/Product");


//get all products

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort("-createdAt");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// add new product


const createProduct = async (req, res) => {
  try {
    const { name, description, price, media, inStock, status } = req.body;
    const product = new Product({
      name,
      description,
      price,
      media,
      status,
      inStock,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({ message: "Error creating product" });
  }
};

//delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("Product not found:", req.params.id);
      return res.status(404).json({
        message: "Product not found",
      });
    }
    await Product.deleteOne({ _id: req.params.id });
    console.log("Product deleted successfully:", req.params.id);
    res.json({ message: "Product removed successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("Product not found:", req.params.id);
      return res.status(404).json({ message: "Product not found" });
    }
    const updates = {
      name: req.body.name || product.name,
      description: req.body.description || product.description,
      price: req.body.price || product.price,
      media: req.body.media || product.media,
      status: req.body.status || product.status,
      inStock:
        req.body.inStock !== undefined ? req.body.inStock : product.inStock,
    };
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log("Product updates successfull:", updateProduct._id);
    res.json(updateProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(400).json({ message: "Error updating product" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
