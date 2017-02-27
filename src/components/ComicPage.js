// src/components/ComicPage.js
import React from 'react';
import { Link } from 'react-router';
import CharacterListItem from './CharacterListItem';
//dev data
import Comic from './Comic';

export default class ComicPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comic:{}, 
      characters:[]
    };
    this.requestRelatedData = this.requestRelatedData.bind(this);

   }
  requestRelatedData(endpoint){
    //this.props.params.id
      let react_this = this;
      fetch("/marvel/comic/" + endpoint)
        .then( (response) => { return response.json() })   
        .then( (json) => {
          let jsonObj = JSON.parse(json);
          //CHECK THIS 
          this.setState({
            comic:jsonObj.data.results[0] 
          });
        })
        .then(function(){
          react_this.setState({thumbnail: react_this.state.comic.thumbnail.path + '.' + react_this.state.comic.thumbnail.extension });
        });

      //Get characters for this comic:: endpoint = this.pros.id
      fetch("/marvel/comic_characters/" + endpoint)
        .then( (response) => { return response.json() })   
        .then( (json) => {
          let jsonObj = JSON.parse(json);
          console.log(jsonObj.data.results );
          this.setState({
            characters:jsonObj.data.results 
          });
        });
  } 
  componentDidMount() {
    this.requestRelatedData(this.props.params.id);
   
  }


  render() {
    const id = this.props.params.id;
    let image ;
    if(this.state.thumbnail !== 'undefined'){
      image = <img src= {this.state.thumbnail}/>
    } 
    
    return (
      <div className="comic-full">
        <div className="imgWrapper">
           {image}
        </div>
        <div className="comic-description">
          <h1 className="title">{this.state.comic.title}</h1>
          <p>{this.state.comic.description}</p>
          <ul className="characters_list"> 
            {
                this.state.characters.map(
                    characterData => <CharacterListItem key={characterData.id} {...characterData} />
                )
            }
          </ul>
        </div>
      </div>
    );
  }
}


/**
 *  To research: ... how to pass props via Link to children components?
 *  I have problems with inmutability, inmmutable.js might help or underscores.

 */

