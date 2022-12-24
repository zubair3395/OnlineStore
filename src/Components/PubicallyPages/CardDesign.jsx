import React, { useState } from 'react'
import LocalData from '../localData/LocalData';
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function CardDesign({collection, product}) {
  const [cart, setCart] = useState(LocalData.cart);
  function handleCartItem(element){
    toast("this item is add in Cart")
      let tempCart = cart;
      tempCart.push(element);
      setCart([...tempCart]);
      LocalData.cart = tempCart;
    
  }
  return (
    <>
    <Navbar count={cart.length}/>
    <div className="container my-5">
      <h1>{product}</h1>
        <div className="row my-3">
           {
              collection.map((element, index)=>
                <div className="col-md">
        <div className="card2" key={index}>
          <div className="shirt">
           <Link to={`productDetail/${element.id}`}><img className="shrit1" src={element.image} alt=""/> </Link> 
          </div>
          <div className="information my-3">
            <div className="text">
              <strong>{element.title.slice(0,20)}...</strong>
              <p>{element.category}</p>
            </div>
            <div className="dollar">
              <div><a href="/" className="btn btn-outline-info"> Price: {element.price}</a></div>
              <div className="mx-lg-5 mb-5"><button type="button" className='btn btn-outline-info' onClick={()=> handleCartItem(element)}>Add to Cart</button>
              <ToastContainer />
              </div>
            </div>
          </div>
        </div>
       </div>
        )}
       
        
        </div>
        </div>
      
    </>
  )
}
