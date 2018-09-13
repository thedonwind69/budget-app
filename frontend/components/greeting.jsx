import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import HighlightsContainer from './highlights_container';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    currentUserHeading () {
        if (this.props.currentUser) {
            return <h1 class="greeting-logged-in">You are logged in as: {this.props.currentUser.username}</h1>
        }
    }

    render () {
        return (
            <div>
                {this.currentUserHeading()}
                <div class="greeting-container">
                    <h1>TransplantCentral</h1>
                    <p>Where you can review your favorite city</p>
                </div>
            <HighlightsContainer />
            </div>
        )
    }
}

export default Greeting;