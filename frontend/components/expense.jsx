import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class Expense extends React.Component {

    constructor(props) {
        super(props)
    }

    deleteExpense () {
        
    }

    render () {
        var {expense} = this.props;
        return (
            <div>
                <h1>{expense.date} : {expense.category}</h1>
                <p>Amount: ${expense.amount}</p>
                <p>Description:</p>
                <p>{expense.description}</p>
                <button>Delete Expense</button>
            </div>
        )
    }

}

export default Expense;