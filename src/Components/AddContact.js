import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const contact = {
    name,
    email,
  };

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All field are mandatory");
    }
    if (name !== "" && email !== "") {
      props.postContact(contact);
    }

    setName("");
    setEmail("");
    if (name !== "" && email !== "") {
      props.history.push("/");
    }
  };

  return (
    <div className="contact-com">
      <form className="contact-form" onSubmit={add}>
        <h2>Add Contact Here</h2>
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
        <button type="submit"> Add Contact </button>
      </form>
    </div>
  );
};

export default AddContact;
