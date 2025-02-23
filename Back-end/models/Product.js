const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  media: [
    {
      type: {
        type: String,
        enum: ["image", "video"],
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      alt: String,
      title: String,
      order: {
        type: Number,
        default: 0,
      },
      isThumbnail: {
        type: Boolean,
        default: false,
      },
    },
  ],
  status: {
    type: String,
    enum: ["active", "inactive", "draft"],
    default: "draft",
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
