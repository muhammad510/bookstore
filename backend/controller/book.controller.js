import Book from "../model/book.model.js";

// GET all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD book
export const addBook = async (req, res) => {
  try {
    const { name, title, category, price } = req.body;

    const book = new Book({
      name,
      title,
      category,
      price,
    });

    await book.save();

    res.status(201).json({
      message: "Book saved successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE book
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

