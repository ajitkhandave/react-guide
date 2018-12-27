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
 swithNameHandler = (newName) =>{
  this.setState({
    persons : [
      { name: newName, age: "28" },
      { name: "Amit", age: "29" },
      { name: "Sagar", age: "20" }
    ]
  })
 }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <button onClick={() => this.swithNameHandler('Ajit khandave')} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          click = {this.swithNameHandler.bind(this, 'Max')}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Is react works'))
  }
}

export default App;
