import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Auth(props) {
    const [isLogin, setIsLogin] = useState(false);
   useEffect(()=>{
    let items = JSON.parse(localStorage.getItem("email"));
    if(items){
        setIsLogin(true);
    }
   },[]) 
  return (
    <>
      {
        isLogin ? props.children : <Link to="/"></Link>
      }
    </>
  )
}
