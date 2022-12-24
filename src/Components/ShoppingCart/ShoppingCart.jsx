import React from 'react';
import {useState, useEffect} from 'react';
import Card from './Card';
import Total from './Total';
import CartNavbar from './CartNavbar';
import LocalData from '../localData/LocalData';
import { useParams } from 'react-router-dom';
// import TotalPayment from '../localData/TotalPayment';

function ShoppingCart() {
  const {id} = useParams();
  const [total, SetTotal ] = useState(0);
  const [users, setUsers] = useState({});
  const [productList, setProductList] = useState(LocalData.cart);
  const [searchedData, setSearchedData]= useState("");
       useEffect(()=>{
        fetch(`http://localhost:3004/users/${id}`).then((response)=> response.json()).then((data)=> setUsers(data))
       })
  function getSearchedData(){
        let tempArr= productList.filter((data) => data.category.toLowerCase().includes(searchedData));
        setProductList(tempArr);
      }
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
    SetTotal(total+ tempArray[id].price);
     tempArray[id].stock-=1;
  }
  function handleDelete(id){
   let tempArr = productList.filter((item) => item.id !== id)
   setProductList(tempArr);
   
  }
  return (
    <>
       <CartNavbar users={users}/>
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
        <Card decrement={decrement} increment={increment}  arr={productList} handleDelete={handleDelete}/>
        </div>
        <div className="col-md-4">
        <Total total={total} users={users} className="postion-fixed"/>
        </div>
       </div>
    </>
  );
}

export default ShoppingCart;

