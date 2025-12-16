import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }

};

export const addBook = async (req, res) => {
  try {
    const { name, title, category, price } = req.body;

    const book = new Book({
      name,
      title: title,
      category: category,
      price: price,
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