import React, { Component } from 'react'

export default class createContact extends Component {
  render() {
    return (
      <div>
        <h3>Create Contact</h3>
        <input placeholder='name'></input> 
        <input placeholder='phone'></input><br></br>
        <button>Create</button>

      </div>
    )
  }
}
