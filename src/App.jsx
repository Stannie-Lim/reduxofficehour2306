import { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { contactListSlice } from "./contactListSlice";

const { deleteContact } = contactListSlice.actions;

function App() {
  const { contactList } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const deleteContactOnClick = (contact) => {
    dispatch(deleteContact(contact));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {contactList.map((contact) => (
        <div key={contact.id}>
          <h1>{contact.name}</h1>
          <h4>{contact.phoneNumber}</h4>
          <button onClick={() => deleteContactOnClick(contact)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
