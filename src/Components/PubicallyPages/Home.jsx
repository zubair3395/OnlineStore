import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'
import { useState, useEffect } from 'react'

export default function Home() {
  const [allCollection, setAllCollection] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
   
  },[])
  return (
    <div>
      <Navbar/>
      <Slider/>
      <div className="container my-5">
        <h1 className='my-3'>All Collection</h1>
      <div className="row my-3">
        {
      allCollection.map((element, index)=>
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
       </div> )}
      </div>
      </div>
      <Footer/>
    </div>
  )
}
