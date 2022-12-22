// import { Link } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";



export default function Product() {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

    const { productId } = useParams();
    

  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/Collection/${productId}`)
      .then((response) => response.json())
      .then((json) => {
        setproduct(json);
      });
  }, []);

  function update(e) {
    e.preventDefault(); // Prevents page refresh on submit
      const products = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        stock : stock
      };
      fetch(`http://localhost:3004/Collection/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }).then((res) => {
        window.location.reload(false)
      });

  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle"> Update Product</h1>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.image} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product.id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">$  {product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Category:</span>
                      <span className="productInfoValue">{product.category}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.stock}</span>
                  </div>
              </div>
          </div>
      </div>
      {/* update product */}
      <div className="newProduct">
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image Link</label>
          <input type="text" defaultValue={product.image} placeholder={product.image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" defaultValue={product.title} placeholder={product.title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" defaultValue={product.description} placeholder={product.description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" defaultValue={product.price} placeholder={product.price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="number" defaultValue={product.stock} placeholder={product.stock} onChange={(e) => setStock(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name="active" defaultValue={product.category} id="active" onChange={(e) => setCategory(e.target.value)}>
          <option>Choose gender</option>
            <option>men</option>
            <option>women</option>
          </select>
        </div>
        <button className="addProductButton" onClick={update}>Update</button>
      </form>
    </div>
    </div>
  );
}
