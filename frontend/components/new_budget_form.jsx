import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

class NewBudgetForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            month: null,
            year: null,
            user_id: this.props.currentUser ? this.props.currentUser.id : null,
        }
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
        const budgetMonth = ReactDOM.findDOMNode(this.refs.month);
        budgetMonth.selectedIndex = 0;
        this.setState({
            month: null,
            year: null,
        })
    }

    submitBudget(event) {
        event.preventDefault();
        const createdBudget = Object.assign({}, this.state);
        this.props.createBudget(createdBudget);
        this.clearForm();
    }

    render () {
        console.log(this.state);
        return (
            <div>
                <div ref='postForm' class={`post-form-container`}>
                    <form ref="postFormReset" onSubmit={this.submitBudget.bind(this)}>
                        <label for='month'>Month</label>
                            <br />
                            <select class='post-category-dropdown' ref='month' id='month' onChange={this.update('month')}>
                                <option value="" selected disabled hidden>Choose Month</option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="Aug">Aug</option>
                                <option value="Sept">Sept</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                            <br /><br />
                        <label for='year'>Year</label>
                            <br/>
                        <input class='post-subject' id='year' type='number' onChange={this.update('year')}/>

                            <br />
                        <input class='post-submit-button' type='submit' value='Create New Budget' />
                    </form>
                </div>
            </div>
        )
    }

}

export default NewBudgetForm;