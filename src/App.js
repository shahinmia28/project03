import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import api from "./Components/api";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import UpdateContact from "./Components/UpdateContact";
import UserDetails from "./Components/UserDetails";
function App() {
  const [contacts, setContacts] = useState([]);

  let randomNum = Math.random() * 100;
  // Post Contact Function
  const postContact = async (contact) => {
    const request = {
      id: randomNum,
      ...contact,
    };
    const response = await api.post("/contact", request);
    setContacts([...contacts, response.data]);
  };

  // Get contacts from server
  const getContacts = async () => {
    const response = await api.get("/contact");
    return response.data;
  };
  //Set contacts in front-end
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await getContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // Delate Contacts function
  const delateContact = async (id) => {
    await api.delete(`/contact/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  // Edit Contacts Function
  const updateContact = async (contact) => {
    const response = await api.put(`/contact/${contact.id}`, contact);
    const { id, name, email } = response.data;

    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  return (
    <div>
      <div>
        <h1 className="header">Hello</h1>
      </div>
      <div className="container">
        <Router>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                delateContact={delateContact}
              />
            )}
          />
          <Route
            path={"/add"}
            render={(props) => (
              <AddContact {...props} postContact={postContact} />
            )}
          />
          <Route
            path={"/edit"}
            render={(props) => (
              <UpdateContact {...props} updateContact={updateContact} />
            )}
          />
          <Route path={"/newContact/:id"} component={UserDetails} />
        </Router>
      </div>
    </div>
  );
}

export default App;
