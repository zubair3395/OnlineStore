import React from 'react'
import { useState, useEffect } from 'react';
import CardDesign from './CardDesign';
import Footer from './Footer';

export default function Women() {
    const [allCollection, setAllCollection] = useState([]);
    const [womenCollection, setWomenCollection] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
       getWomenCollection();
      })
    function getWomenCollection(){
     let tempArr = allCollection.filter((item)=> item.category==="women's clothing");
     setWomenCollection(tempArr);
    }
  return (
    <>
      <CardDesign collection={womenCollection} product="Women New arrival Collection"/>
      <Footer/>
    </>
  )
}
