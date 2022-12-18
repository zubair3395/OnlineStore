import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
//  const [review, setReview] = useState("");
//  const [customer, setCustomer] = useState("")
//  function handleReview(){
//     let reviewObj={
//       review,
//       customer
//     }
    
//     localStorage.setItem("review", JSON.stringify(reviewObj.review));
    
//     fetch("http://localhost:3004/Reviews",{
//       method: "Post",
//       headers: {
//         "content-type": "application/json",
//         "accept": "application/json"
//       },
//       body:  JSON.stringify(reviewObj)
//     }).then((response)=> response.json())
//  }

  useEffect(() => {
    fetch(`http://localhost:3004/Collection/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setproduct(json);
      },[]);
  });
    return (
      <>
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
          <buttom className="btn btn-outline-info px-4 py-2 mx-5">
            Add to Cart
          </buttom>
          <Link to="/shoppingCart" className="btn btn-outline-info">Go to Cart</Link> 
        </div>
        </div>
        {/* <div className="row">
        <h3>Enter your Review</h3>
        <label htmlFor="name" className="my-3"> Enter your Name</label>
        <input type="text" id="name" className="form-control my-2 rounded-5" placeholder="Enter your name" onChange={(e)=> setCustomer(e.target.value)}/>
        <label htmlFor="review" className="my-3"> Your Review</label>
        <input id="review" type="text" className="form-control my-2 rounded-5" placeholder="Enter your Review" onChange={(e)=> setReview(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-outline-info" onClick={handleReview}>Submit Review</button> */}
        </div>
      </>
    )
}
