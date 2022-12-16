import React from 'react';
import {useState, useEffect} from 'react';
import Card from './Card';
import Total from './Total';
import CartNavbar from './CartNavbar';

function ShoppingCart() {
  const [total, SetTotal ] = useState(0);
  const [productList, setProductList] = useState([]);
  const [searchedData, setSearchedData]= useState("");
     function getData(){
    fetch('http://localhost:3004/Collection')
        .then(res=>res.json())
        .then(json=>  setProductList(json))
       }
       function getSearchedData(){
        let tempArr= productList.filter((data) => data.category.toLowerCase().includes(searchedData));
        setProductList(tempArr);
      }
  useEffect(()=>{
     getData()
  },[])
  function decrement(id){     
    let tempArray = productList;
    if(tempArray[id].quantity>0){
      tempArray[id].quantity-=1;
      setProductList([...tempArray]);
      SetTotal(total-tempArray[id].price);
    }
    if(tempArray[id].stock<100){
      tempArray[id].stock+=1;
    } 
   
  }
  function increment(id){  
    let tempArray = productList;
    tempArray[id].quantity+=1;
    setProductList([...tempArray]);
    let subPrice= total+ tempArray[id].price;
    SetTotal(subPrice);
     tempArray[id].stock-=1;
  }
  return (
    <>
       <CartNavbar/>
       <div className='container my-3'>
       <div className="row">
        <div className="col-md">
        <h1>Shopping Cart </h1>
       <p>Homepage/Clothing Categories/Shopping Cart</p>
        </div>
        <div className="col-md">
          <input type="text" className="form-control" placeholder='Search here'onChange={(e)=> setSearchedData(e.target.value)}/>
          <button className='btn btn-outline-info my-1' onClick={getSearchedData}>Find</button>
        </div>
       </div>
     
       
       </div>
       <div className="row">
        <div className="col-md-8">
          <hr />
        <Card decrement={decrement} increment={increment}  arr={productList} />
        </div>
        
        <div className="col-md-4">
        <Total total={total} className="postion-fixed"/>
        </div>
       </div>
    </>
  );
}

export default ShoppingCart;

