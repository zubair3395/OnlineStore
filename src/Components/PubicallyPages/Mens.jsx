import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CardDesign from './CardDesign';
import Footer from './Footer';

export default function Mens() {
    const [allCollection, setAllCollection] = useState([]);
    const [menCollection, setMenCollection] = useState([]);
    // window.location.reload();
    useEffect(()=>{
        fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
       getMenCollection();
      })
    function getMenCollection(){
     let tempArr = allCollection.filter((item)=> item.category==="men's clothing");
     setMenCollection(tempArr);
    }
  return (
    <>
       <CardDesign collection={menCollection} product="Men collection New Arrival"/>
       <Footer/>
    </>
  )
}
