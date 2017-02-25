// src/components/IndexPage.js
import React from 'react';
 

export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state={data:""};
    }

    componentDidMount() {
        fetch("http://localhost:8080/marvel/comics")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({data: json});
                    });
    };
    render() {
        return (
          <div className="home">
            <div className="">
                Index page
                {this.state.data}
            </div>
          </div>
        );
  }
}