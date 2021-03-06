import React from 'react';
import ReactDOM from 'react-dom';
import createPieChart from '../js/createPieChart';
import Expense from './expense';

class NewExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            amount: 0,
            date: null,
            description: null,
            user_id: this.props.currentUser ? this.props.currentUser.id : null,
            currentTakeHomePay: this.props.takeHomePayDataset[0].amount
        }
    }

    generatePayInfo () {
        var {takeHomePayDataset, currentExpenses, moneySpent} = this.props;
        var pieChart = ReactDOM.findDOMNode(this.refs.pieChart);
        pieChart.innerHTML = "";
        var allExpenses = [];
        for (let j=0; j<takeHomePayDataset.length; j++) {
            allExpenses.push(takeHomePayDataset[j]);
        }
        var expenseObject = {};
        for (let i = 0; i<currentExpenses.length; i++) {
            let currentExpense = currentExpenses[i];
            if (!expenseObject[currentExpense.category]) {
                expenseObject[currentExpense.category] = currentExpense.amount;
            } else {
                expenseObject[currentExpense.category] += currentExpense.amount;
            }
        }
        var expenseObjectKeys = Object.keys(expenseObject);
        for (let k=0; k < expenseObjectKeys.length; k++) {
            var expenseCategoryObject = {};
            var currentKey = expenseObjectKeys[k];
            expenseCategoryObject['type'] = currentKey;
            expenseCategoryObject['amount'] = expenseObject[currentKey];
            allExpenses.push(expenseCategoryObject);
        }
        
        allExpenses.forEach((expense) => {
            if (expense.type === 'Take-Home') {
                expense.amount = this.state.currentTakeHomePay - moneySpent;
            }
        })

        return allExpenses;
    }

    generatePieChart (array) {
        var pieChart = ReactDOM.findDOMNode(this.refs.pieChart);
        pieChart.innerHTML = "";
        createPieChart(array);
    }

    componentDidUpdate () {
        this.generatePieChart(this.generatePayInfo());
    }

    componentWillUnmount () {
        this.props.resetExpenses();
        this.props.resetExpenseErrors();
    }

    afterExpenses () {
        var {moneySpent} = this.props;
        return this.state.currentTakeHomePay - moneySpent;
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: event.currentTarget.value
            })
        }
    }

    clearForm () {
        const postFormReset = ReactDOM.findDOMNode(this.refs.postFormReset);
        postFormReset.reset();
        const category = ReactDOM.findDOMNode(this.refs.category);
        category.selectedIndex = 0;
        this.setState({
            category: null,
            amount: null,
            description: null
        })
    }

    submitExpense (event) {
        event.preventDefault();
        var currentBudgetId = this.props.currentBudget.id;
        const createdExpense = Object.assign({}, this.state);
        this.props.createExpense(this.state.user_id, currentBudgetId, createdExpense);
        this.props.resetExpenseErrors();
        this.clearForm();
    }

    displayAllExpenses () {
        var {currentExpenses, currentBudget, deleteExpense} = this.props;
        var sortedExpenses = currentExpenses.sort((a, b) => {
            var keyA = new Date (a.date);
            var keyB = new Date (b.date);
            return keyA - keyB;
        })
        var displayExpenses = sortedExpenses.map((expense) => {
            return (
                <li>
                    <Expense 
                        expense={expense} 
                        currentBudget={currentBudget} 
                        currentUserId={this.state.user_id}
                        deleteExpense={deleteExpense}
                    />
                </li>
            )
        })
        var display = currentExpenses.length > 0 ? displayExpenses.reverse() : <h1>You don't have any expenses yet.</h1>
        return display;
    }

    displayErrors () {
        var displayErrors = this.props.expenseErrors.map((error, i) => {
            return <li style={{color: 'red'}} key={`${i}`}>{error}</li>;
        })
        if (this.props.expenseErrors.length > 0) {
            return displayErrors;
        }
    }

    render () {
        return (
            <div>
                <h1>Your take-home monthly pay is : {this.state.currentTakeHomePay}</h1>
                <h1>Your take-home monthly pay AFTER expenses is :{this.afterExpenses()}</h1>
                <div>
                    <div ref='pieChart' class='left' id='pie-chart'>
                    </div>
                    <div ref='postForm' class={`post-form-container`}>
                        <form ref="postFormReset" onSubmit={this.submitExpense.bind(this)}>
                                <br />
                                <select class='post-category-dropdown' ref='category' id='category' onChange={this.update('category')}>
                                    <option value="" selected disabled hidden>Choose Category</option>
                                    <option value="Food">Food</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Misc">Misc</option>
                                </select>
                                <br />
                            <label for='amount'>Amount</label>
                                <br/>
                            <input class='post-subject' id='amount' type='number' onChange={this.update('amount')}/>
                                <br />
                            <label for='date'>Date</label>
                                <br/>
                            <input class='post-subject' id='date' type='date' onChange={this.update('date')}/>
                                <br/>
                            <label for='description'>Description</label>
                                <br/>
                            <input class='post-subject' id='description' type='text' onChange={this.update('description')}/>
                                <br/>
                            <input class='post-submit-button' type='submit' value='Add New Expense' />
                        </form>

                        <div><ul>{this.displayErrors()}</ul></div>
                        
                    </div>
                </div>
                <div class='clearfix'></div>
                <div class='all-expenses'>
                    <ul>
                        {this.displayAllExpenses()}
                    </ul>
                </div>

            </div>
        )
    }

}

export default NewExpenseForm;