import React, { useState } from "react";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get(`https://dhqz39-3000.csb.app/`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.head}</li>
        ))}
      </ul>
    );
  }
}
