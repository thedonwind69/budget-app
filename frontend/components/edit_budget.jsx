import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import calculatePayCheck from '../js/calculatePayCheck';
import PieChart from './pie_chart';

class EditBudget extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillUnmount () {
        this.props.resetBudgets();
    }

    calculateTakeHomePay () {
        var {currentBudget} = this.props;
        var takeHomePay = calculatePayCheck(currentBudget.salary, "bi-weekly");
        return takeHomePay;
    }

    render () {
        var {currentBudget} = this.props;
        
        return (
            <div>
                <h1>Month of {currentBudget.month} {currentBudget.year}</h1>
                <h1>{currentBudget.salary} annual salary</h1>
                <h1>Your take home bi-weekly pay-check is: {this.calculateTakeHomePay()[0].amount}</h1>


                <div>
                    <PieChart currentBudget={currentBudget} takeHomePayDataset={this.calculateTakeHomePay()}/>
                </div>
            </div>
        )
       
    }

}

export default EditBudget;