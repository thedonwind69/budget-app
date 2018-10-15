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
            <div class='single-budget'>
                <h1>{this.props.budget.month}</h1>
                <h1>{this.props.budget.year}</h1>
            </div>
        )
       
    }

}

export default Budget;