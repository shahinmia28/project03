import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // delate Contacts function
  const delateContact = (id) => {
    props.delateContact(id);
  };

  return (
    <div className="contact-list-com">
      <div>
        <h2> Contact List </h2>
        <Link to={"/add"} className="Link-btn">
          <button className="btn">Contact Form</button>
        </Link>
      </div>

      <div>
        {props.contacts.map((contact, index) => {
          return (
            <div key={index} className="list">
              <ContactCard contact={contact} delateContact={delateContact} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
