import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import Budget from './budget';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div class="home-page-container">
                    <Link to="/form"><button>Create New Budget</button></Link>
                </div>
            )
        } else {
            return (
                <div>

                    <h1>You are not logged in, please login or sign up!</h1>

                </div>
            )
        }

    }

}

export default HomePage;