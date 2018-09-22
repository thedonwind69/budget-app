import React from 'react';
import CityIndexItem from './city_index_item';
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
                  
                    <Link class={'nav-link nav-link-hover'} to="/login">LogIn</Link>
                    <h1>or</h1>
                    <Link class={'nav-link nav-link-hover'} to="/signup">SignUp</Link>
                    <h1>if you are already logged in:</h1>
                </div>
       
        )
    }

}

export default HomePage;