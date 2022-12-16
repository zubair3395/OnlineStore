import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function AdminPage() {
    const [review, setReview]= useState([]);
    function getReview(){
        let url = "http://localhost:3004/Reviews";
        fetch(url).then((reponse)=> reponse.json()).then((data)=> setReview(data));
    }
    useEffect(()=>{
        getReview()
    })
  return (
    <>
    <h1>this is admin page</h1>
    </>
  )
}
