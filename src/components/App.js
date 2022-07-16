import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const deleteHandler = (id) => {
     const newContactList = contacts.filter((conctact) => {
      return conctact.id != id;
     })
     setContacts(newContactList);
  }

  const addContactHander = (contact) => {
    console.log(uuid())
    setContacts([...contacts, {id:uuid(), ...contact}]);
    console.log(contacts)
  };
  useEffect(() => {
    const retriveLocastorage =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveLocastorage?.length !== 0){
    setContacts(retriveLocastorage);
    }
  },[]);

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHander={addContactHander}  />
      <ContactList contacts={contacts} getConatctId={deleteHandler} />
    </div>
  );
}

export default App;
