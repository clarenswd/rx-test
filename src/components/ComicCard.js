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
        let price_span  = [];
        if (typeof this.props.prices !== 'undefined') {
          price_span = <span className="comicprice">${this.props.prices[0].price}</span>;
        }
        let view_more;

        if (this.props.moreurl == "characters"){

          view_more = <Link to={`/characters/${this.props.id}`}>
                        <button className="view_more">View more</button>
                       </Link>;
        }else{

          view_more = <Link to={`/comic/${this.props.id}`}>
                        <button className="view_more">View more</button>
                       </Link>;
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
                       
                       {price_span}
                       {view_more}
                       
                    </div>
                  </div>
            </li>
         
        );
  }
}

 