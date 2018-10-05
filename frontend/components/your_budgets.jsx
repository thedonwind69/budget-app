import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import Budget from './budget';

class YourBudgets extends React.Component {

    constructor(props) {
        super(props)
    }

    yourBudgets () {
        var budgets = this.props.currentUser.budgets;
        var displayBudgets = budgets.map((singleBudget) => {
            return (
                <div><Budget budget={singleBudget}></Budget></div>
            )
        });
        return displayBudgets;
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div class="home-page-container">
                    <div>
                        {this.yourBudgets()}
                    </div>

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

export default YourBudgets;