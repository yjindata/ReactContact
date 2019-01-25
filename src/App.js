import React, { Component } from 'react';
import Header from './components/Header';
import ContactName from './components/ContactName';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import CreateContact from './components/CreateContact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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