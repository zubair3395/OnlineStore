import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import LocalData from '../localData/LocalData';
import Searchbar from './Searchbar';
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
  const [cart, setCart] = useState(LocalData.cart);
  const [allCollection, setAllCollection] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
  },[])
  function handleCartItem(element){
    toast("This item is add in cart")
      let tempCart = cart;
      tempCart.push(element);
      setCart([...tempCart])
      LocalData.cart= tempCart
    
  }
  return (
    <div>
      <Navbar count={cart.length}/>
      <Slider/>
      <div className="container my-5">
      <Searchbar collection={allCollection} setCollection={setAllCollection}/>
        <h1 className='my-3'>All Collection</h1>
      <div className="row my-3">
        {
      allCollection!==null ? allCollection.map((element, index)=>
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
              <div className="mx-lg-5 mb-5"><button type="button" className='btn btn-outline-info' onClick={()=> handleCartItem(element)}>Add Cart</button>
              <ToastContainer className="text-center"/>
              </div>
            </div>
          </div>
        </div>
        
       </div>) : <h1>Server down</h1> }
      </div>
      </div>
      <Footer/>
    </div>
  )
}