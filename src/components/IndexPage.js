// src/components/IndexPage.js
import React from 'react';
import ComicCard from './ComicCard';
import Comics from './Comics';
import Search from './Search';
export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state={comics:[]};
    }

    componentDidMount() {
         
         
        this.setState({comics:Comics.data.results});
        // fetch("http://localhost:8080/marvel/comics")
        //     .then( (response) => { return response.json() })   
        //             .then( (json) => {
        //                 let jsonObj = JSON.parse(json);
        //                 this.setState({comics:jsonObj.data.results });
        //             });
    };
    // Print comics obj ::>> {this.state.comics.toString()}
    render() {
        return (
          <div className="home">
            <Search/>
            <ul  className="comiclist">  
         
                {
                    this.state.comics.map(
                        comicData => <ComicCard key={comicData.id} {...comicData} />
                    )
                }
    
            </ul>
          </div>
        );
  }
}