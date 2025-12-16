import { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import list from "../assets/list.json";
import axios from "axios";

function Card() {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <div className="row container">
      {book.map((item, index) => (
        <div className="col-md-3" key={index}>
          <div className="card">
            <img src={banner1} className="card-img-top" alt="book" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.name}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
