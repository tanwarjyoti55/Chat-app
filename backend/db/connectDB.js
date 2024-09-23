import mongoose from "mongoose";
import "dotenv/config"; // Ensure .env file is loaded

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongoose Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

// Instead of `export default`, we use `export` for named export in ES Module.
export { connectDB };
