import React from 'react'
import { useState } from 'react';

export default function Searchbar({collection, setCollection}) {

    const [searchedData, setSearchedData]= useState("");
    function getSearchedData(){
        let tempArr= collection.filter((data) => data.category.toLowerCase().includes(searchedData));
        setCollection(tempArr);
      }
  return (
    <>
        <div className="col-md d-flex">
          <input type="text" className="form-control w-75" placeholder='Search here'onChange={(e)=> setSearchedData(e.target.value)}/>
          <button className='btn btn-outline-info my-1 mx-3 p-2' onClick={getSearchedData}>Find</button>
        </div>
    </>
  )
}
