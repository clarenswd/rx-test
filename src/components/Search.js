//src/components/Search.js
import React from 'react';
export default class Search extends React.Component {
    render(){
        return(
            <div className="search_component">
                <input type="text" className="search_input" onChange={this.props.filterList} placeholder="Spiderman, Antman,... "/>
                <button className="search_btn" onClick={this.props.clickevent}>Search</button>
            </div>
        );
    }
}