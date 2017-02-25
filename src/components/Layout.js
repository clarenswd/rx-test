// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import superheroesblur from '../static/img/superheroesblur.png';

const logoStyle = {
  maxWidth: '300px',
};
export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
             Home
          </Link>
        </header>
        
        <div className="app-content">
          {this.props.children}
        </div>
      
      </div>
    );
  }
}