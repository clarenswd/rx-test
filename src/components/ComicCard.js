//src/components/ComicCard.js
import React from 'react';
import { Link } from 'react-router'; 

export default class ComicCard extends React.Component {
    render() {
        let thumbnail_url =this.props.thumbnail.path + '.' + this.props.thumbnail.extension; 
        var backgroundImage = {
            backgroundColor:'red',
            backgroundImage: 'url(' +thumbnail_url+ ')'
        }
        
        return (
            <li>
               <Link to={`/comic/${this.props.id}`}>
                  <div className="comiccard" style={backgroundImage}>
                        <div className="comicdata">
                         comic preview data
                        </div>
                  </div>
              </Link>
            </li>
         
        );
  }
}

 