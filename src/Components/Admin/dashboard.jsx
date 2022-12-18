import React from "react";

import {useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import { NavLink } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Collection")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function logout() {
    //Removes all Local storage data.
    toast.info("successfully Logged Out",{position:"top-center",autoClose:2000, onClose: () => {
      // localStorage.clear();
      navigate("/admin/login");
    }})
  }

  function CreateProduct() {
    navigate("/admin/createproduct");
  }
  function DeleteProduct() {
    navigate("/admin/deleteproduct");
  }

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="230px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/admin/productdetail/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div
        className="bg-dark"
        style={{ width: "100%", height: "1000%", position: "absolute" }}
      >
        <h1 className="text-center text-white">Welcome to Homepage</h1>
        <h4 className="text-white ms-3">
          {/* HELLO {localStorage.getItem("username").toUpperCase()} */}
        </h4>
        <button className="btn btn-warning ms-3" onClick={logout}>
          Logout
        </button>
        <button className="btn btn-danger ms-3" onClick={CreateProduct}>
          Create Product
        </button>
        <button className="btn btn-danger ms-3" onClick={DeleteProduct}>
          Delete Product
        </button>
        {/* card */}
        <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-12 mb-5 ">
            <h1 className="display-6 fw-bolder text-center">Women's products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
        {/* end of card */}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Dashboard;
