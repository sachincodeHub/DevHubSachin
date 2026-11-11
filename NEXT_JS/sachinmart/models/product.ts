import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true
    },
    brand: {
        type: String,
        trim: true,
        default: "Generic"
    },
    stock: {
        type: Number,
        required: true,
        min: [0, "Stock cannot be negative"],
        default: 0
    },
    images: {
        type: [String],
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Product =
    mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;