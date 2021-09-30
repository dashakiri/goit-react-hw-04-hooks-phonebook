import { useState, useEffect } from "react";
import shortid from "shortid";
import { ContactsList } from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import { Filter } from "./Filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse([window.localStorage.getItem("contacts")]) && [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts((prevState) => [...prevState, contact]);
  };

  const onFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const contactsToRender = () => {
    return !filter
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Form onSubmit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={onFilterChange} />

      <ContactsList
        contacts={contactsToRender()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
