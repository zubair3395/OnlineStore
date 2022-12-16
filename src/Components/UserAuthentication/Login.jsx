import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  const [database, setDatabase] = useState([]);
  const [specificID, setSpecificID]= useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   const handleclick = ()=>{
    navigate("/shoppingCart");
    }
    console.log("userID", specificID);
  const handleSubmit= ()=>{
   const userData = database.find((c)=> c.email===email)
   if(userData){
    if(userData.email=== email && userData.password=== password){
      setSpecificID(userData.id);
      localStorage.setItem("email",JSON.stringify(userData.email));
      localStorage.setItem("password",JSON.stringify(userData.password));
      handleclick();
    }
    else{
      alert("name or password invaild")
    }
   }
   else{
    alert("data can't found");
   }
  }
  useEffect(()=>{
    let url = "http://localhost:3004/users";
    fetch(url).then((response)=> response.json()).then((data)=> setDatabase(data));
  },[])


  return (
    <>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
              <div
                className="cards text-white"
                style={{
                  backgroundColor: "#49dae3",
                  borderRadius: "1rem",
                  color: "black"
                }}
              >
                <div className="card-body p-5 " >
                    <h2 className="fw-bold mb-2 text-uppercase text-center">LogIn</h2>
                    <p className=" text-center">
                      Please enter your login and password!
                    </p>
                   
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your Email"
                        style={{fontSize:"17px"}}
                      onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Enter your Password"
                        style={{fontSize:"17px"}}
                        onChange={(e)=> setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      LogIn
                    </button>
                    <p >
                      Don't have an account?{" "}
                      <Link to="/UserSignUp" className="fw-bold">
                        Sign Up
                      </Link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

