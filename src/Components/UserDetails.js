import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  const { id, name, email } = props.location.state.contact;
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={user} alt="User" />
        </div>
        <div className="card-details">
          <h2>{name}</h2>
          <span>{email}</span>
        </div>
        <Link to={"/"}>
          <button className="btn">Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
