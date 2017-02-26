// src/components/IndexPage.js
import React from 'react';
 

export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state={comics:[]};
    }

    componentDidMount() {
        fetch("http://localhost:8080/marvel/comics")
            .then( (response) => { return response.json() })   
                    .then( (json) => {
                        let jsonObj = JSON.parse(json);
                        this.setState({comics:jsonObj.data.results });
                    });
    };
    render() {
        return (
          <div className="home">
            <div className="">
                {this.state.comics.toString()}
            </div>
          </div>
        );
  }
}