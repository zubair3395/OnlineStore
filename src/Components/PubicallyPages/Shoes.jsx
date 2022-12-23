import React from 'react'
import CardDesign from './CardDesign';
import { useState, useEffect } from 'react';
import Footer from './Footer';
export default function Shoes() {

    const [allCollection, setAllCollection] = useState([]);
    const [shoesCollection, setShoesCollection] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
       getShoesCollection();
      })
    function getShoesCollection(){
     let tempArr = allCollection.filter((item)=> item.category==="shoes");
     setShoesCollection(tempArr);
    }

  return (
    <>
      <CardDesign collection={shoesCollection} product="Shoes New Arrival Collection"/>
      <Footer/>
    </>
  )
}
