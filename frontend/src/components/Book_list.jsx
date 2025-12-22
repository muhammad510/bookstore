import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Book_list() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch books (Reusable)
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4001/book");
      setBook(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Run once on page load
  useEffect(() => {
    fetchBooks();
  }, []);

  // 🔹 Delete book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/book/${id}`);
      fetchBooks();
    } catch (error) {
      console.log("DELETE ERROR 👉", error.response || error.message);
      alert("Delete failed");
    }
  };

  // 🔹 UI states
  if (loading) return <h4 className="text-center">Loading...</h4>;
  if (error) return <h4 className="text-danger text-center">{error}</h4>;

  return (
    <div>
      <h3 className="text-center">Book list</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Book Name</th>
            <th>price</th>
            <th>Category</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {book.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No books found
              </td>
            </tr>
          ) : (
            book.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>
                  <button className="btn btn-info btn-sm me-1">View</button>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => deleteBook(item._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/book/update/${item._id}`} className="btn btn-warning btn-sm"> Update </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Book_list;
