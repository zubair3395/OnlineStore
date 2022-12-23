import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LocalData from "../localData/LocalData";
import Navbar from "../PubicallyPages/Navbar";
export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [cart, setCart] = useState(LocalData.cart);
  useEffect(() => {
    fetch(`http://localhost:3004/Collection/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setproduct(json);
      },[]);
  });
    return (
      <>
      <Navbar count={cart.length}/>
       <div className="container my-3">
        <div className="row my-3">
        <div className="col-md-6 my-5">
          <img
            src={product.image}
            alt=".."
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, voluptatem.</h1>
          <p className="lead fw-bolder">
            Rating {product.rating}
          </p>
          <i className="fa fa-start"></i>
          <h3 className="display-6 fw-bold my-4"> $ {product.price}</h3>
          <p className="lead">{product.decription ? product.decription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tempore vero sequi iure in soluta distinctio quas id impedit harum"}</p>
          <buttom className="btn btn-outline-info px-4 py-2 mx-5" onClick={()=>{
            let tempCart = cart;
            tempCart.push(product);
            setCart([...tempCart]);
            LocalData.cart = tempCart;
          }}>
            Add to Cart
          </buttom>
          <Link to="/UserLogin" className="btn btn-outline-info">Go to Cart</Link> 
        </div>
        </div>
        </div>
      </>
    )
}
