import { useState } from "react";

function Add_form() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch("http://localhost:4001/book/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
      setForm({ name: "", title: "", category: "", price: "" }); // reset form
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Add Book Details</h3>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter course name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter course Title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  placeholder="Enter course Category"
                  value={form.category}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  placeholder="Enter course price"
                  value={form.price}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mt-3">
                <button type="submit" className="form-control btn btn-danger">
                  Add Subject
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </form>
    </div>
  );
}

export default Add_form;
