//src/components/ComicCard.js
import React from 'react';
import { Link } from 'react-router'; 

export default class ComicCard extends React.Component {
    render() {
        return (
        <li>
           <Link to={`/comic/${this.props.id}`}>
              <div className="comiccard" style={{background:'red'}}>
                    <div className="comicdata">
                     comic preview data
                    </div>
              </div>
          </Link>
        </li>
        );
  }
}

 