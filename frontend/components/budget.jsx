import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

class Budget extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h1>this is a single budget</h1>
            </div>
        )
       
    }

}

export default Budget;