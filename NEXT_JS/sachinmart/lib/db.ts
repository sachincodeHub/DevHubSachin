import mongoose, { type Mongoose } from "mongoose";
let cachedConnection: Mongoose | null = null;

const connectDB = async () => {
    if (cachedConnection) {
    return cachedConnection;
}
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/SachinMartDB");
        cachedConnection = connection;
        return cachedConnection;
   
    }
    catch (error) {
         console.error("MongoDB connection failed:", error);
        throw error;
        
    }
}
 export default connectDB;