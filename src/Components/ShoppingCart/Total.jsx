import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TotalPayment from '../localData/TotalPayment';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function Total({total}) {
    const [order, setOrder] = useState(0);
    const navigate = useNavigate()
    useEffect(()=>{
      setOrder(total+25+24);
    })
  const handleTotal = ()=> {
    if (order <= 49){
      toast("Please order some thing")
    }
    else
    {
      let tempItem = TotalPayment.pay;
      tempItem.push(order);
      TotalPayment.pay = tempItem;
      navigate("/SubmitPayment")
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
           <p>Estimate</p> 
          </div>
          <div className="col-md mx-5">
            <p> $24</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md">
           <p>Tax</p> 
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
          <button className='btn btn-info p-2 w-100 rounded-5' onClick={handleTotal}> <strong>Checkout</strong> </button>
        <ToastContainer/>
        </div>
         </div>
      


    </>
  )
}
