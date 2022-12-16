import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Total({total}) {
    const [order, setOrder] = useState(0);
    useEffect(()=>{
      setOrder(total+25+24);
    })
   function handleCheckOut(){
    if(total>49){
    alert("Your order successfully")
   }
   else
   {
   alert("Please order something");
   }
  }
  return (
    <>
      <div className='mx-5 position-fixed'>
        <div className="row">
        <h4>Order summary</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-md">
           <p>SubTotal</p> 
          </div>
          <div className="col-md mx-5">
            <p> ${total}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md">
           <p>Shopping Estimate</p> 
          </div>
          <div className="col-md mx-5">
            <p> $24</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md">
           <p>Tax estimate</p> 
          </div>
          <div className="col-md mx-5">
            <p> $25</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md">
           <strong>Order Total</strong> 
          </div>
          <div className="col-md">
            <strong> ${order}</strong>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-info p-2 rounded-5 mt-3' onClick={handleCheckOut}> <strong>Checkout</strong> </button>
        </div>
         </div>
      


    </>
  )
}
