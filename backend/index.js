import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB connection
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Connection Error:", err));

// routes
app.use("/book", bookRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
