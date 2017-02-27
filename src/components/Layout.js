// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import superheroesblur from '../static/img/superheroesblur.png';
import superheroesblack from '../static/img/superheroesblack.png';


 
const backgroundImage = {
            backgroundImage: 'url(' +superheroesblack+ ')', 
            overflow: "auto", 
            backgroundSize: 170,
            backgroundAttachment: "fixed",
        }

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container" style={backgroundImage}>
        <header>
          <ul className="navi">
          <li>
            <Link to="/">
               Home
            </Link>
          </li>
          <li>
            <Link to="/">
               Comics
            </Link>
          </li>
          <li>
            <Link to="/characters">
               characters
            </Link>
          </li>
            
          </ul>
        </header>
        
        <div className="app-content">
          {this.props.children}
        </div>
      
      </div>
    );
  }
}