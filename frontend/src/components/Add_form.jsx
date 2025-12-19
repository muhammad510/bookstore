import { useState } from "react";
import axios from "axios";

function Add_form() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    category: "",
    price: "",
  });

  const [message, setMessage] = useState(""); // success/error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!form.name || !form.title || !form.category || !form.price) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4001/book", form);
      setMessage(res.data.message);
      setForm({ name: "", title: "", category: "", price: "" });
    } catch (error) {
      console.error("Error:", error.response || error.message);
      setMessage("Failed to add book");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Add Book Details</h3>

        {message && <p className="text-center text-danger">{message}</p>}

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Enter course name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="title"
              className="form-control mb-2"
              placeholder="Enter course title"
              value={form.title}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              className="form-control mb-2"
              placeholder="Enter course category"
              value={form.category}
              onChange={handleChange}
            />

            <input
              type="text"
              name="price"
              className="form-control mb-2"
              placeholder="Enter course price"
              value={form.price}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-danger w-100 mt-2">
              Add Subject
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </form>
    </div>
  );
}

export default Add_form;
