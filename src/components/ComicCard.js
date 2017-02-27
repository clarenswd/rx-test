//src/components/ComicCard.js
import React from 'react';
import { Link } from 'react-router'; 

export default class ComicCard extends React.Component {
    render() {
        let thumbnail_url =this.props.thumbnail.path + '.' + this.props.thumbnail.extension; 
        let backgroundImage = {
            backgroundColor:'red',
            backgroundImage: 'url(' +thumbnail_url+ ')'
        }
        
        return (
            <li>
                  <div className="comiccard" >
                    <div className="imgWrapper">
                      <img src={thumbnail_url} />
                    </div>
                    <div className="comicdata">
                       <h1 className="title">{this.props.title}</h1>
                       <p>{(this.props.description)? this.props.description.substr(0,200)+"...":"No description for this comic"}</p>
                       <span className="comicprice">${this.props.prices[0].price}</span>
                       <Link to={`/comic/${this.props.id}`}>
                        <button className="view_more">View more</button>
                       </Link>
                    </div>
                  </div>
            </li>
         
        );
  }
}

 