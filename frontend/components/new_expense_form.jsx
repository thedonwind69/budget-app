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

    componentWillMount () {
        var currentBudgetId = this.props.currentBudget.id;
        var currentUserId = this.props.currentUser.id
        this.props.fetchExpenses(currentUserId, currentBudgetId);
    }

    componentWillUnmount () {
        this.props.resetExpenses();
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
        console.log(this.state);
        return (
            <div>
                 <div ref='postForm' class={`post-form-container`}>
                    <form ref="postFormReset" onSubmit={this.submitExpense.bind(this)}>
                        <label for='category'>Category</label>
                            <br/>
                        <input class='post-subject' id='category' type='text' onChange={this.update('category')}/>
                            <br/>
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