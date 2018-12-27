import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: "Ajit", age: "28" },
      { name: "Amit", age: "29" },
      { name: "Sagar", age: "25" }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Is react works'))
  }
}

export default App;
