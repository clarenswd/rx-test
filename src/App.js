import React, { Component } from 'react';
import Layout from './components/Layout';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }
   
  render() {
    
    return (
      <div className="App">
         <Layout/>
      </div>
    );
  }
}

export default App;
