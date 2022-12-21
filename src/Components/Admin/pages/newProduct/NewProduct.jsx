import "./newProduct.css";
import React from "react";
import { useState } from "react";
import {  NavLink } from "react-router-dom";

export default function NewProduct() {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  function submit(e) {
    e.preventDefault(); // Prevents page refresh on submit
    if (
      title === "" ||
      description === "" ||
      price === "" ||
      image === "" ||
      category === "" ||
      stock === ""
    ) {
      alert("Fields cannot be Empty");
    } else {
      const products = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        stock : stock
      };
      fetch(`http://localhost:3004/Collection`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }).then((res) => {
        if (res.status === 201) {
          alert("Data has been updated Successfully", {
            position: "top-center",
            autoClose: 2000,
            onClose: () => {
              NavLink('/admin/newproduct');
            },
          });
        }
      });
    }
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image Link</label>
          <input type="text" placeholder="Place an image link" onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Enter Product Name" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Enter Product Description" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="number" placeholder="Enter Product Stock" onChange={(e) => setStock(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name="active" id="active" onChange={(e) => setCategory(e.target.value)}>
          <option>Choose gender</option>
            <option>men</option>
            <option>women</option>
          </select>
        </div>
        <button className="addProductButton" onClick={submit}>Create</button>
      </form>
    </div>
  );
}
