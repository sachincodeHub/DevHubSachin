import mongoose from "mongoose";
import Product from "../models/product";
import products from "./products.json";

const updateProductImages = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ShopKartDB");

    console.log("MongoDB Connected");

    let updatedCount = 0;
    let notFoundCount = 0;

    for (const product of products) {
      const result = await Product.updateOne(
        { name: product.name },
        {
          $set: {
            images: product.images,
          },
        }
      );

      if (result.matchedCount > 0) {
        updatedCount++;
        console.log(`Images updated: ${product.name}`);
      } else {
        notFoundCount++;
        console.log(`Product not found: ${product.name}`);
      }
    }

    console.log("\nImage Update Completed!");
    console.log(`Updated products: ${updatedCount}`);
    console.log(`Products not found: ${notFoundCount}`);
  } catch (error) {
    console.log("Image Update Error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

updateProductImages();
