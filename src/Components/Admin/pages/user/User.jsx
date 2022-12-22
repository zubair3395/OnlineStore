import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function User() {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3004/users/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  function update(e) {
    e.preventDefault(); // Prevents page refresh on submit
      const users = {
        status : status
      };
      fetch(`http://localhost:3004/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      }).then((res) => {
        window.location.reload(false)
      });

  }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={data.image}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.name}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
          <div className="newProduct">
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <span className="userShowInfoTitle">{data.name}</span>
        </div>
        <div className="addProductItem">
          <label>Email</label>
          <span className="userShowInfoTitle">{data.email}</span>
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name="active" id="active" onChange={(e) => setStatus(e.target.value)}>
          <option>Choose Status</option>
            <option>Active</option>
            <option>Block</option>
          </select>
        </div>
        <button className="addProductButton" onClick={update}>Update</button>
      </form>
    </div>
          </form>
        </div>
      </div>
    </div>
  );
}
