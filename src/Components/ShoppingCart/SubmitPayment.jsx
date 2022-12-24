import React, { useEffect, useState } from 'react'
import TotalPayment from '../localData/TotalPayment'
import CartNavbar from './CartNavbar';
import LocalData from '../localData/LocalData';
import { toast, ToastContainer } from 'react-toastify';

export default function SubmitPayment() {
    let total_payment = TotalPayment.pay[0];
    const [CartItems, setCartItems] = useState(LocalData.cart);

     const [address, setAddress] = useState("");
 const [customer, setCustomer] = useState("")
 const [street, setStreet] = useState("");
 function handleInfo(){
    let reviewObj={
      address,
      customer,
      street,
      total_payment,
      CartItems
    }
    if (reviewObj.address.length<5 || reviewObj.customer.length<5 || reviewObj.street.length<5){
      toast("You must enter the at least 5 character for each field");
    }
    else{
    localStorage.setItem("address", JSON.stringify(reviewObj.address));
    
    fetch("http://localhost:3004/CustomerInfo",{
      method: "Post",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body:  JSON.stringify(reviewObj)
    }).then((response)=> response.json())
  }
 }
   function handleDelivery(){
    handleInfo();
    if (address.length<5 || customer.length<5 || street.length<5){
      // alert("You must enter at least 5 charcater fr each field")
    }
    else{
    toast("Your order succesfully")
    }
   }

  return (
    <>
      <CartNavbar users=""/>
      <div className="container">
      <h3 className='my-3'>You have to buy these items</h3>
      <div className="row my-3">
                <div className="col-md">Id</div>
                <div className="col-md">Category</div>
                <div className="col-md">Title</div>
                <div className="col-md"> Quantity</div>
                <div className="col-md">price</div>
                </div>
        {
            CartItems.map((element)=> 
            <div className="row my-3" key={element.id}>
               
             <div className="col-md">{element.id}</div>
                <div className="col-md">{element.category}</div>
                <div className="col-md">{element.title.slice(0,10)}</div>
                <div className="col-md"> {element.quantity}</div>
                <div className="col-md">{element.price}</div>
                
            </div> 
            )}
            <div className="row my-3">
                <div className="col-md"></div>
                <div className="col-md"></div>
                <div className="col-md"></div>
                <div className="col-md"><strong>Total Bill</strong></div>
                <div className="col-md"><strong>{total_payment}</strong></div>
            </div>  
                 <div className="row">
        <h3>Enter your Information</h3>
        <input type="text" id="name" className="form-control my-2 rounded-3" placeholder="Enter your name" onChange={(e)=> setCustomer(e.target.value)}/>
        <input id="review" type="text" className="form-control my-2 rounded-3" placeholder="Enter your City" onChange={(e)=> setAddress(e.target.value)}/>
        <input type="text" className="form-control my-2 rounded-3" placeholder='Enter Street' onChange={(e) => setStreet(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-outline-info" onClick={handleDelivery}>Cash on Delivery</button> 
      <ToastContainer/>
      </div>
    </>
  )
}
