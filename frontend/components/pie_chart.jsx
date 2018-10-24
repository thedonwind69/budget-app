import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import createPieChart from '../js/createPieChart';

class PieChart extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        var {currentBudget, takeHomePayDataset} = this.props;
        createPieChart(takeHomePayDataset);
    }

    render () {
        var {currentBudget, takeHomePayDataset} = this.props;
        console.log(takeHomePayDataset);

        return (
            <div id='pie-chart'>
             

            </div>
        )
    }

}

export default PieChart;