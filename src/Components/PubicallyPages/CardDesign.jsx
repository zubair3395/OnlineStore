import React from 'react'
import Navbar from './Navbar'

export default function CardDesign({collection, product}) {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <h1>{product}</h1>
        <div className="row my-3">
            {
                collection.map((element, index)=>
                <div className="col-md">
        <div className="card2" key={index}>
          <div className="shirt">
            <img className="shrit1" src={element.image} alt=""/>
          </div>
          <div className="information my-3">
            <div className="text">
              <strong>{element.title.slice(0,20)}...</strong>
              <p>{element.category}</p>
            </div>
            <div className="dollar">
              <div><a href="/" className="btn btn-outline-info"> Price: {element.price}</a></div>
              <div className="mx-lg-5 mb-5"> <i className="bi bi-star-fill"></i> <span> 4.8 Review (4.9)</span></div>
            </div>
          </div>
        </div>
       </div>
                )
            }
        
        </div>
        </div>
      
    </>
  )
}
