import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

 const DeleteProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  function handleDelete(id){

    let product = data.find((item)=> item.id===id);
    let index = data.indexOf(product);
    console.log("index", index);
     this.data.splice(index,1);


  }

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <section className="h-100">
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                      <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={product.image}
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-normal mb-2">{product.title}</p>
                              <p>
                                <span className="text-muted">{product.category} </span>
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value="2"
                                type="number"
                                className="form-control form-control-sm"
                              />

                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">${product.price}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              
                             <button onClick={()=> handleDelete(product.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5 ">
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};
export default DeleteProduct;
