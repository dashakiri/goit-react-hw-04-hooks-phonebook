import React, { Component } from "react";
import shortid from "shortid";
import { ContactsList } from "./ContactsList/ContactsList";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const currentContacts = localStorage.getItem("contacts");
    const parsedCurrentContacts = JSON.parse(currentContacts);

    if (parsedCurrentContacts) {
      this.setState({ contacts: parsedCurrentContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  contactsToRender = () => {
    const { contacts, filter } = this.state;
    return !filter
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <Form
          onSubmit={this.formSubmitHandler}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.onFilterChange} />

        <ContactsList
          contacts={this.contactsToRender()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
