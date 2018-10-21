import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import calculatePayCheck from '../js/calculatePayCheck';

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
              
            </div>
        )
       
    }

}

export default EditBudget;