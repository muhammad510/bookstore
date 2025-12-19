import express from "express";
import {
  getBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook
} from "../controller/book.controller.js";

const router = express.Router();

// GET all books
router.get("/", getBooks);

// GET single book
router.get("/:id", getBookById);

// ADD book
router.post("/", addBook);

// UPDATE book
router.put("/:id", updateBook);

// DELETE book
router.delete("/:id", deleteBook);


export default router;
