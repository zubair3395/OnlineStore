
import { React, useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 const AdminProductDetail = () => {
    const { id } = useParams();

  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setproduct(json);
      });
  }, []);
  const ShowProductDetail = () => {
    return (
      <>
      <Link className="btn btn-info" to="/admin/products">Back to home</Link>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <i className="fa fa-start"></i>
          <h3 className="display-6 fw-bold my-4"> $ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <NavLink to="" className="btn btn-dark ms-2 px-3 py-2 ">
            Delete
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
        <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProductDetail />
        </div>
      </div>
    </div>
    </div>
  )
}
export default AdminProductDetail;
