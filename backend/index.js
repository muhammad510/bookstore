import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
import bookRoute from "./route/book.route.js";

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

try {
  await mongoose.connect(URI);
  console.log("MongoDB Connected");
} catch (err) {
  console.log("Connection Error: " + err);
}

// defining routes

app.use("/book",bookRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
