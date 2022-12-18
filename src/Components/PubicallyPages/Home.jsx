import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import LocalData from '../localData/LocalData'

export default function Home({allCollection,count, handleCart}) {
  const [cart, setCart] = useState(LocalData.cart);
  
  return (
    <div>
      <Navbar count={cart.length}/>
      <Slider/>
      <div className="container my-5">
        <h1 className='my-3'>All Collection</h1>
      <div className="row my-3">
        {
      allCollection.map((element, index)=>
         <div className="col-md" key={index}>
          
        <div className="card2" key={index}>
          <div className="shirt">
          <Link to={`productDetail/${element.id}`}> 
           <img className="shrit1" src={element.image} alt=""/>
            </Link>
          </div>
          <div className="information my-3">
            <div className="text">
              <strong>{element.title.slice(0,20)}...</strong>
              <p>{element.category}</p>
            </div>
            <div className="dollar">
              <div><a href="/" className="btn btn-outline-info"> Price: {element.price}</a></div>
              <div className="mx-lg-5 mb-5"><button type="button" className='btn btn-outline-info' onClick={()=> {
                let tempCart = cart;
                tempCart.push(element);
                setCart([...tempCart])
                LocalData.cart= tempCart
              }}>Add Cart</button></div>
            </div>
          </div>
        </div>
        
       </div>)}
      </div>
      </div>
      <Footer/>
    </div>
  )
}