import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import calculatePayCheck from '../js/calculatePayCheck';
import NewExpenseFormContainer from './new_expense_form_container';

class EditBudget extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        var {currentBudget, currentUser} = this.props;
        if (this.props.currentUser) {
            var currentBudgetId = currentBudget.id;
            var currentUserId = currentUser.id
            this.props.fetchExpenses(currentUserId, currentBudgetId);
        }
    }

    componentWillUnmount () {
        this.props.resetBudgets();
    }

    calculateTakeHomePay () {
        var {currentBudget} = this.props;
        var takeHomePay = calculatePayCheck(currentBudget.salary, "monthly");
        return takeHomePay;
    }

    render () {
        var {currentBudget} = this.props;
        if (this.props.currentUser) {
            return (
                <div>
                    <h1>Month of {currentBudget.month} {currentBudget.year}</h1>
                    <h1>{currentBudget.salary} annual salary</h1>
                    <div>
                        <NewExpenseFormContainer currentBudget={currentBudget} takeHomePayDataset={this.calculateTakeHomePay()}/>
                    </div>
                </div>
            ) 
        } else {
            return <Redirect to='/login'/>
        }
    }

}

export default EditBudget;