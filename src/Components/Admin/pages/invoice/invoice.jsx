import "./invoice.css";
import { useParams } from "react-router-dom";
import { React, useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function NewUser() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  const { orderId } = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/orders/${orderId}`)
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        console.log(data);
      });
  }, []);

  return (
    <div className="newUser" ref={componentRef}>
      <div className="header">
        <h1 className="newUserTitle">Order</h1>
        <button className="newUserButton" onClick={handlePrint}>
          Print
        </button>
      </div>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <span type="text" placeholder="john">
            {data.name}
          </span>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <span type="text" placeholder="John Smith">
            {data.email}
          </span>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <span type="email" placeholder="john@gmail.com">
            {data.address}
          </span>
        </div>
        <div className="newUserItem">
          <label>City</label>
          <span type="password" placeholder="password">
            {data.city}
          </span>
        </div>
        <div className="newUserItem">
          <label>Phone No</label>
          <span type="text" placeholder="+1 123 456 78">
            {data.phoneNo}
          </span>
        </div>
        <div className="newUserItem">
          <label>Postal Code</label>
          <span type="text" placeholder="New York | USA">
            {data.postalCode}
          </span>
        </div>
      </form>
    </div>
  );
}
