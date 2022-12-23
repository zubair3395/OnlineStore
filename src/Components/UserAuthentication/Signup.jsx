import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
export default function Signup() {
 const [ name, setName]= useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword]= useState("");
 const navigate = useNavigate();
 function handleSingup(){
  const user={
    name,
    email,
    password
  }
  if(user.name.length<5 || user.email.length<5 || user.password.length<5){
    toast("You must enter at least 5 character for each field")
  }
  else
  {
  localStorage.setItem("name", JSON.stringify(user.name));
  fetch("http://localhost:3004/users", {
    method: "Post",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body:  JSON.stringify(user)
  }).then((response)=> response.json())
    navigate("/shoppingCart");
   }
 }

  return (
    <>
        <div className='container'>
         <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
              <div
                className="cards text-white"
                style={{
                  backgroundColor: "#49dae3",
                  borderRadius: "1rem",
                }}
              >
                <div className="card-body p-5 ">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    SignUp
                  </h2>
                  <p className="text-white-50 text-center">
                    Please enter your Data!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Name"
                      style={{ fontSize: "17px" }}
                      onChange={(e)=> setName(e.target.value)}
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typeEmailX">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      placeholder="Enter your Email"
                      style={{ fontSize: "17px" }}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typePasswordX">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      placeholder="Enter your Password"
                      style={{ fontSize: "17px" }}
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit" onClick={handleSingup}
                  >
                    SignUp
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link to="/userLogin" className=" fw-bold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        <ToastContainer/>
         </div>
   
    </>
  )
}

