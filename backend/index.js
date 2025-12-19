import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";

dotenv.config();

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Port & DB
const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MongoDBURI;

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 🔹 Routes
app.use("/book", bookRoute);

// 🔹 MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error);
  });
