import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [popup, setPopup] = useState(false);

  const delateHandler = (id) => {
    props.delateContact(id);
  };

  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this",
      buttons: [
        {
          label: "Yes",
          onClick: () => setPopup(true),
        },
        {
          label: "No",
          onClick: () => setPopup(false),
        },
      ],
    });
  };

  useEffect(() => {
    if (popup === true) {
      delateHandler(id);
    }
  }, [submit]);

  return (
    <div className="list-item">
      <img src={user} alt="img-user" className="user-img" />

      <Link
        to={{
          pathname: `/newContact/${id}`,
          state: { contact: props.contact },
        }}
        className="user-details"
      >
        <h3>{name}</h3>
        <span>{email} </span>
      </Link>

      <div className="list-handler">
        <Link
          to={{ pathname: "/edit", state: { edit: props.contact } }}
          className="edit"
        >
          <i>Edit</i>
        </Link>

        <i onClick={() => submit(id)}>Delate</i>
      </div>
    </div>
  );
};

export default ContactCard;
