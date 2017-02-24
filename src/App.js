import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var md5 = require('md5');


class App extends Component {
  constructor(props){
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }
  authenticate(){
    let ts = '1';
    let pk = 'd16f65a18b67e96a5e7bd55de1c675c4';
    let pub_key = 'b128578135ff747b60902c97bb100a9c43185337';

    let hashed_data = md5(ts + pk + pub_key);
    let url_end_point = "http://gateway.marvel.com/v1/comics?ts="+ts+"&apikey="+ pk + "&hash="+hashed_data;

    fetch(url_end_point).then(function(response) {
        console.log( response);
    })
  }
  render() {
    this.authenticate();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
