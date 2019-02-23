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

    deleteBudget () {
        var {budget, currentUser} = this.props;
        this.props.deleteBudget(currentUser.id, budget.id);
    }

    render () {
        return (
            <div class='single-budget'>
                <Link to={`/budgets/${this.props.budget.id}`}>
                    <h1>{this.props.budget.month}</h1>
                    <h1>{this.props.budget.year}</h1>
                    <h1>Annual Salary: {this.props.budget.salary}</h1>
                </Link>
                <button class='post-submit-button' onClick={this.deleteBudget.bind(this)}>Delete Budget</button>
            </div>
        )
       
    }

}

export default Budget;