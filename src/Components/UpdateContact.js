import React, { useState } from "react";

const UpdateContact = (props) => {
  const editInfo = props.location.state.edit;
  const id = editInfo.id;
  const [name, setName] = useState(editInfo.name);
  const [email, setEmail] = useState(editInfo.email);

  const contact = { id, name, email };

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All field are mandatory");
    }
    if (name !== "" && email !== "") {
      props.updateContact(contact);
    }
    setName("");
    setEmail("");
    if (name !== "" && email !== "") {
      props.history.push("/");
    }
  };

  return (
    <div className="contact-com">
      <form className="contact-form" onSubmit={update}>
        <h2>Edit Your Contact</h2>
        <input
          value={name}
          type="text"
          placeholder="Enter Your Full name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit"> Update Contact </button>
      </form>
    </div>
  );
};

export default UpdateContact;
