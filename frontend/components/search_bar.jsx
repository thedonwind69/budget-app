import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class SearchBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    changeSearchValue (event) {
        event.preventDefault();
        this.setState({
            searchValue: event.currentTarget.value
        })
    }

    componentDidMount () {
        // const searchContainer = ReactDOM.findDOMNode(this.refs.searchContainer);
        // const li = document.createElement("p");
        // li.innerHTML = "bitch";
        // li.classList.add('search-list-item');
        // searchContainer.appendChild(li);
    }

    render () {
        return (
            <div class='search-container' ref='searchContainer'>
                <input 
                    class="search-bar"
                    ref='searchBar'
                    type="text" 
                    placeholder="Search City"
                    value={this.state.searchValue}
                    onChange={this.changeSearchValue.bind(this)}
                />
              
           </div>
        )
    }

}



export default SearchBar;