import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import calculatePayCheck from '../js/calculatePayCheck';

import createPieChart from '../js/createPieChart';


class NewExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            amount: 0,
            date: null,
            description: null,
            user_id: this.props.currentUser ? this.props.currentUser.id : null,
        }
    }

    generatePayInfo () {
        var {currentBudget, takeHomePayDataset, currentExpenses} = this.props;
        var pieButton = ReactDOM.findDOMNode(this.refs.pieButton);
        pieButton.classList.add('hide-this-shit');
        var allExpenses = [];
        for (let j=0; j<takeHomePayDataset.length; j++) {
            allExpenses.push(takeHomePayDataset[j]);
        }
        for (let i=0; i<currentExpenses.length; i++) {
            var expense = currentExpenses[i];
            let expenseObject = {};
            expenseObject['type'] = expense.category;
            expenseObject['amount'] = expense.amount;
            allExpenses.push(expenseObject);
        } 
        // console.log(allExpenses);
        createPieChart(allExpenses);
    }

    componentWillUnmount () {
        this.props.resetExpenses();
    }

    componentDidUpdate () {
        var pieChart = ReactDOM.findDOMNode(this.refs.pieChart);
        pieChart.innerHTML = "";
        this.generatePayInfo();
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
            date: null,
            description: null
        })
    }

    submitExpense (event) {
        event.preventDefault();
        var currentBudgetId = this.props.currentBudget.id;
        const createdExpense = Object.assign({}, this.state);
        this.props.createExpense(this.state.user_id, currentBudgetId, createdExpense);
        this.clearForm();
    }

    render () {
        var {currentBudget, takeHomePayDataset, currentExpenses} = this.props;

        return (
            <div>
                <h1>Your take-home monthly pay is : {takeHomePayDataset[0].amount}</h1>
                <h1>Your take-home monthly pay AFTER expenses is :</h1>
                <div ref='pieChart' class='left' id='pie-chart'>

                </div>
                
                <button ref='pieButton' onClick={this.generatePayInfo.bind(this)} class='post-submit-button'>View Paycheck Info:</button>

                 <div ref='postForm' class={`right post-form-container`}>
                    <form ref="postFormReset" onSubmit={this.submitExpense.bind(this)}>
                    <label for='category'>Category</label>
                            <br />
                            <select class='post-category-dropdown' ref='category' id='category' onChange={this.update('category')}>
                                <option value="" selected disabled hidden>Choose Category</option>
                                <option value="Food">Food</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Other">Other</option>
                            </select>
                            <br />
                        <label for='amount'>Amount</label>
                            <br/>
                        <input class='post-subject' id='amount' type='number' onChange={this.update('amount')}/>
                            <br />
                        <label for='date'>Date</label>
                            <br/>
                        <input class='post-subject' id='date' type='text' onChange={this.update('date')}/>
                            <br/>
                        <label for='description'>Description</label>
                            <br/>
                        <input class='post-subject' id='description' type='text' onChange={this.update('description')}/>
                            <br/>
                        <input class='post-submit-button' type='submit' value='Add New Expense' />
                    </form>
                </div>


            </div>
        )
    }

}

export default NewExpenseForm;