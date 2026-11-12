import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  brand: {
    type: String,
    default: "Generic",
  },
  stock: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    default: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

export default Product;