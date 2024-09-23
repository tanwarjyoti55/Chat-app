import express from "express";
import "dotenv/config";
import registerRoutes from "./routes/registerRoute.js";
import { connectDB } from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT;

connectDB();
app.use(express.json()); // To parse json data in req.body
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/register", registerRoutes);

app.listen(PORT, () => {
  console.log(`Server listening from ${PORT}`);
});
