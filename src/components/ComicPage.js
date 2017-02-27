// src/components/ComicPage.js
import React from 'react';
import { Link } from 'react-router';
 
//dev data
import Comic from './Comic';

export default class ComicPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic:{}};
  }
  componentDidMount() {
    this.setState({comic:Comic.data.results[0]});
    //Do the request with fetch here
  }
  render() {
    const id = this.props.params.id;
     
    return (
      <div className="comic-full">
        {id}
      </div>



    );
  }
}