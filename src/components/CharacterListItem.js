//src/components/CharacterListItem.js
import React from 'react';
import { Link } from 'react-router'; 

export default class CharacterListItem extends React.Component {
    render() {
        return (
            <li>
              <div className="character" >
                       <h1 className="character_name">{this.props.name}</h1>
                       <p>{(this.props.description)? this.props.description.substr(0,200)+"...":"No description for this character"}</p>
              </div>
            </li>
         
        );
  }
}

 