import { useState } from 'react'
import banner1 from '../assets/banner1.jpg'
import list from "./../assets/list.json"

function Card() {
  const filterData = list.filter((data) => data.category === 'free');
  console.log(filterData);
  return (
    <>


      <div className="row container">


        {filterData.map((key, value) =>  (


        <div className="col-md-3">
          <div className="card">
            <img src={banner1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{key.title}</h5>
              <p className="card-text">
               {key.name}
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
       
        ))}






      </div>


    </>
  )
}

export default Card
