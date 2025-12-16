import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";

dotenv.config();

const app = express();
app.use(cors());

// 🔥 REQUIRED FOR FORM DATA
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ THIS WILL NOW WORK
// app.post("/add_form_data", (req, res) => {
//   console.log("Form Data:", req.body);
//   res.send("nasreen i love you");
// });





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
