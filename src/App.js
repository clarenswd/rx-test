import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }
  authenticate(){

    fetch('http://gateway.marvel.com:80/v1/public/characters?name=Spider-Man&apikey=d16f65a18b67e96a5e7bd55de1c675c4').then(function(response) {
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
