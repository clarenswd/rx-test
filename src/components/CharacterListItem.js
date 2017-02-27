//src/components/CharacterListItem.js
import React from 'react';
import { Link } from 'react-router'; 

export default class CharacterListItem extends React.Component {
    render() {
        let thumbnail_url =this.props.thumbnail.path + '.' + this.props.thumbnail.extension; 
        return (
            <li>
              <Link to={`/characters/${this.props.id}`}>
              <div className="character" >
                  <div className="character_pic">
                      <img src={thumbnail_url}/>
                  </div>
                  <div className="character_info">
                       <h1 className="character_name">{this.props.name}</h1>
                       <p>{(this.props.description)? this.props.description.substr(0,200)+"...":"No description for this character"}</p>
                  </div>
              </div>
              </Link>
            </li>
         
        );
  }
}

 