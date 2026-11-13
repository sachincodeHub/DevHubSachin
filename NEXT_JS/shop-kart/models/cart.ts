import mongoose, { Schema } from "mongoose";
const cartSchema = new Schema({
  sessionId: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
});
const Cart =
  mongoose.models.Cart ||
  mongoose.model("Cart", cartSchema);

export default Cart;