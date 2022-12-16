import React from 'react'
import CardDesign from './CardDesign';
import { useState, useEffect } from 'react';

export default function Kids() {
    const [allCollection, setAllCollection] = useState([]);
    const [kidsCollection, setKidsCollection] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/Collection").then((response)=> response.json()).then((data)=> setAllCollection(data));
       getKidsCollection();
      })
    function getKidsCollection(){
     let tempArr = allCollection.filter((item)=> item.category==="kids");
     setKidsCollection(tempArr);
    }
  return (
    <div>
      <CardDesign collection={kidsCollection} product="Kids New arrival Collection"/>
    </div>
  )
}
