import mongoose from "mongoose";

let cachedConnection: typeof mongoose | null = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/ShopKartDB"
    );

    cachedConnection = connection;

    console.log("MongoDB Connected");

    return connection;
  } catch (error) {
    console.log("MongoDB Error:", error);
    throw error;
  }
};

export default connectDB;