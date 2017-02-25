// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import superheroes from '../static/img/superheroes.png';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src={superheroes}/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}