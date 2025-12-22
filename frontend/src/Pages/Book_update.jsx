import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Book_update() {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    title: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch book by ID
  useEffect(() => {
    axios
      .get(`http://localhost:4001/book/${id}`)
      .then((res) => {
        setForm({
          name: res.data.name || "",
          price: res.data.price || "",
          category: res.data.category || "",
          title: res.data.title || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load book");
        setLoading(false);
      });
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4001/book/${id}`, form);
      alert("Book updated successfully");
      navigate("/book_list");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  // 🔹 UI states
  if (loading) return <h4 className="text-center mt-4">Loading...</h4>;
  if (error) return <h4 className="text-danger text-center">{error}</h4>;

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Update Book</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Update Book
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/book_list")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Book_update;
