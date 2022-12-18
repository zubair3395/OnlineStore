
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateProduct = () => {
  const [title, setTitle] = useState(localStorage.getItem("name"));
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // const username = localStorage.getItem("username");

  function submit(e) {
    e.preventDefault(); // Prevents page refresh on submit
    if (
      title === "" ||
      description === "" ||
      price === "" ||
      image === "" ||
      category === ""
    ) {
      toast.error("Fields cannot be Empty", { autoClose: 2000 });
    } else {
      const products = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
      };
      fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }).then((res) => {
        if (res.status === 201) {
          toast.success("Data has been updated Successfully", {
            position: "top-center",
            autoClose: 2000,
            onClose: () => {
              navigate("/admin/dashboard");
            },
          });
        }
      });
    }
  }

   function myHandler (e){
    let file = e.target.files[0]
    this.setImage(file);
  }


  const navigate = useNavigate();
  
  return (
    <div>
      <div
        className="bg-dark"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        <div className="mt-5 w-50 mx-auto bg-white p-5 rounded-3">
          <div className="container">
            <h1 className="mb-4 display-7 text-sm-center text-lg-start text-md-start text-center">
              Create Post
            </h1>
            <form onSubmit={submit} className="row g-3">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Title"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)}>
                  <option>Select ...</option>
                  <option>men</option>
                  <option>women</option>
                </select>
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                <label className="form-label">Description</label>
                <textarea
                  type="text"
                  className="form-control "
                  required
                  placeholder="Enter Content"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                <label className="form-label">Image Link</label>
                <textarea
                  type="text"
                  className="form-control "
                  required
                  placeholder="Enter Content"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              
              <div className="col-12 text-sm-center text-lg-start text-md-start text-center">
                <button
                  type="submit"
                  className="btn btn-danger px-5 mt-2"
                  onClick={submit}
                  id="btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default CreateProduct;