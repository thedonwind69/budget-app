import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCities();
    }

    render () {
        return (
          
                <div class="home-page-container">
                    <Link to="/form"><button>Create New Budget</button></Link>
                </div>
       
        )
    }

}

export default HomePage;