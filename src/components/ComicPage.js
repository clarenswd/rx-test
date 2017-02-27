// src/components/ComicPage.js
import React from 'react';
import { Link } from 'react-router';
 
//dev data
import Comic from './Comic';

export default class ComicPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic:{}};
    this.requestRelatedData = this.requestRelatedData.bind(this);
   }
  requestRelatedData(endpoint){
    //this.props.params.id
      fetch("http://localhost:5000/marvel/comic/" + endpoint)
            .then( (response) => { return response.json() })   
            .then( (json) => {
                let jsonObj = JSON.parse(json);
                console.log(jsonObj);

                //CHECK THIS 
                this.setState({comic:jsonObj.data.results[0] });
            });
  } 
  componentDidMount() {
    console.log("cdm");
    this.requestRelatedData(this.props.params.id);
     
  }


  render() {
    const id = this.props.params.id;
    
    return (
      <div className="comic-full">
        <h1 className="title">{this.state.comic.title}</h1>
        <p>{this.state.comic.description}</p>
      </div>



    );
  }
}


/**
 *  To research: ... how to pass props via Link to children components?
 *  I have problems with inmutability, inmmutable.js might help or underscores.

 */

