// src/components/IndexPage.js
import React from 'react';
import ComicCard from './ComicCard';
import Comics from './Comics';
import Search from './Search';
export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            endpoint : "comics",
            comics:[], 
            filterComics : [], 
            searchClicked : false
        };
        
        this.filterList = this.filterList.bind(this);
        this.requestData =  this.requestData.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
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
                            filterComics:Comics.data.results
                        });
                    });
    }

    componentDidMount() {
        this.requestData(this.state.endpoint);
    };

    filterList(event){

        var filteredList = this.state.filterComics;
        filteredList = filteredList.filter(function(item){

          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({comics: filteredList});

    }
    searchClicked(event){
        alert();
        this.setState({searchClicked:true});
    }

    // Print comics obj ::>> {this.state.comics.toString()}
    render() {
        let msg ;
        if(this.state.searchClicked){
            msg = <span className="amessage">Nothing to search, the api doesn't allow it.</span>;
        }
 
        return (
          <div className="home">
            <Search clickevent={this.searchClicked} filterList={this.filterList}/>
            {msg}

            <ul className="comiclist">  
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