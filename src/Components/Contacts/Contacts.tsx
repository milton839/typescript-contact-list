import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({
    name: "",
    email: "",
  });
  const [contactList, setContactList] = useState<IContact[]>([]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    const allContact = [...contactList, contact];
    setContactList(allContact);
    setContact({
      name: "",
      email: "",
    });
  };

  const contactRemove = (email: string) => {
    const newContactList = contactList.filter(
      (contact) => contact.email !== email
    );
    setContactList(newContactList);
  };

  console.log(contactList);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={inputChange}
        placeholder="Contyact Name"
        className="my-5 p-1 mx-2"
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={inputChange}
        placeholder="Contyact Email"
        className="my-5 p-1 mx-2"
      />
      <button onClick={addContact} className="btn btn-primary">
        Add
      </button>
      {contactList.map((contact) => (
        <Contact
          name={contact.name}
          email={contact.email}
          key={contact.email}
          contactRemove={contactRemove}
        ></Contact>
      ))}
    </div>
  );
};

export default Contacts;
