// src/components/CharactersPage.js
import React from 'react';
import ComicCard from './ComicCard';
import Comics from './Comics';
import Search from './Search';
 

export default class CharactersPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            endpoint : "characters",
            comics:[],
            filterComics : [] 

        };
 
        
        this.filterList = this.filterList.bind(this);
        this.requestData =  this.requestData.bind(this);
    
    }

    requestData(endpoint){
        console.log(this.state.endpoint);
        fetch("/marvel/" + endpoint)
            .then( (response) => { return response.json() })   
                    .then( (json) => {
                        console.log("using fetch " + endpoint);
                        let jsonObj = JSON.parse(json);
                        this.setState({
                            comics:jsonObj.data.results, 
                            filterComics:jsonObj.data.results, 
                        });
                    });
    }

    componentDidMount() {             
                this.requestData(this.state.endpoint);
    };

    filterList(event){
        console.log(this.state.filterComics);
        var filteredList = this.state.filterComics;

        filteredList = filteredList.filter(function(item){
        console.log(item);
          return item.name.toLowerCase().search(
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
                        comicData => <ComicCard key={comicData.id} title={comicData.name} moreurl="characters" {...comicData} />
                    )
                }
    
            </ul>
          </div>
        );
  }
}