import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDeta() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4001/book/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Book not found");
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>{book?.title}</h2>

      <p>
        <strong>Author:</strong> {book?.author}
      </p>

      <p>
        <strong>Price:</strong> ₹{book?.price}
      </p>

      <p>
        <strong>Description:</strong>
      </p>

      <p>{book?.description}</p>
    </div>
  );
}

export default BookDeta;
