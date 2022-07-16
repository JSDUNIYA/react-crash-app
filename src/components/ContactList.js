import React from "react";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deletContactHandler = (id) => {
    props.getConatctId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deletContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
