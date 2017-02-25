import React, { Component } from 'react';
import Layout from './components/Layout';
import './App.css';
import AppRoutes from './components/AppRoutes';


class App extends Component {
  constructor(props){
    super(props);
  }
   

  //should I make the initial API query  here?

  render() {

    return (
      <AppRoutes/>
    );
  }
}

export default App;
