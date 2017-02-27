// src/components/ComicPage.js
import React from 'react';
import { Link } from 'react-router';
 
//dev data
import Comic from './Comic';

export default class ComicPage extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.setState({comics:Comics.data.results, filterComics:Comics.data.results});

  }
  render() {
    const id = this.props.params.id;
     
    return (
      <div className="comic-full">

      </div>
    );
  }
}