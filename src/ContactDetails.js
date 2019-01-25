import React, { Component } from 'react'

export default class contactDetails extends Component {
  render() {
    return (

      <div>
        <h3>Details</h3>
        <p>Not selected</p>
        <button onClick={'editClicked'}>Edit</button>
        <button onClick={'removeClicked'}>Remove</button>
      </div>
    )
  }
}
