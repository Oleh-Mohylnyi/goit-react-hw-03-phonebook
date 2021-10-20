// import logo from './logo.svg';
import React from 'react';
import { Component } from 'react';
import './App.css';
import Form from '../components/Form'
import List from '../components/List'
import { v4 as uuid } from 'uuid';
import Filter from '../components/Filter';

class App extends Component {

  state = {
    contacts: [
    ],
    filter: ''
  }

  componentDidMount() {
    const contactsFromLocal = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contactsFromLocal)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value })
  }

 onSubmit = (name, number) => {
    
    const regNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
    } else {
      if (name === '' || number === '') {
        alert("Do not save contact without a name or number")
      } else {
        if (!regName.test(name)) {
          alert("Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.")
        } else {
          if (!regNumber.test(number)) {
            alert("Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +")
          } else {
            this.saveContact({ name, number })
          }
        }
      }
    }
  }

  saveContact = (newContact) => {
    const {name, number} = newContact
    const contact = {
      id: uuid(),
      name,
      number
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
      filter: ''
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {

    const filtredContacts =
      this.state.contacts.filter(
        contact => contact.name.toLowerCase().includes(
          this.state.filter.toLowerCase()))

    return (
      <div className="app">
        <h1>Phonebook</h1>
        <Form
          saveForm={this.onSubmit}
          />
        
        {this.state.contacts.length > 0 
          ? (<>
            <h2>Contacts</h2>
            <Filter
                handleChange={this.handleFilterChange}
                filter={this.state.filter} />
            </>)
          : (<p>no contacts at the moment</p>)
        }
        <List
          filtredContacts={filtredContacts}
          deleteContact={this.deleteContact}
          />
      </div>
    )
  }
}

export default App;

