import React, { Component } from 'react';
import {Form, FormControl, Button } from 'react-bootstrap';
import ShowBirthday from './ShowBirthday'
import './App.css';
import SelectBox from '../feature/select/index'

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }



  render() {
  return (
    <div className="App">
      <h1>Custom SelectBox</h1>
      <div style={{margin:'60px', position:'relative'}}>
      <SelectBox   items= {[
        { value : "United State", id: 1},
        { value : "Canada", id: 2},
        { value : "India", id: 3} 
      ]}
     />
      </div>
    </div>
  );
 } 
}

export default App;
