import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import Budget from './budget';
import NewBudgetFormContainer from './new_budget_form_container';

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

    componentDidMount () {
        
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div class="home-page-container">
                    <div>
                        {this.yourBudgets()}
                    </div>

                    <div>
                        <NewBudgetFormContainer />
                    </div>

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