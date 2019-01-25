import React, { Component } from 'react';
import ContactName from './contactName';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import CreateContact from './createContact';

class App extends Component {
  render() {
    return (
      <div>
        Counter
        <ContactName />
        <ContactList />
        <ContactDetails /> 
        <CreateContact />
      </div>
    );
  }
}

export default App;