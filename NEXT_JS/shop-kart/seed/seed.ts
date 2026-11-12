import mongoose from "mongoose";
import Product from "../models/product";
import products from "./products.json";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ShopKartDB");

    console.log("MongoDB Connected");

    const result = await Product.insertMany(products);

    console.log(`${result.length} products inserted successfully!`);
  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

seedProducts();