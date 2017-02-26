// src/components/IndexPage.js
import React from 'react';
import ComicCard from './ComicCard';
import Comics from './Comics';
import Search from './Search';
export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state={comics:[]};
        this.filterList = this.filterList.bind(this);
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

    filterList(event){
        
        var filteredList = this.state.comics;
        filteredList = filteredList.filter(function(item){

          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({comics: filteredList});

    }
    // Print comics obj ::>> {this.state.comics.toString()}
    render() {
        return (
          <div className="home">
            <Search filterList={this.filterList}/>
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