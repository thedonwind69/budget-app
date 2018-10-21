import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class EditBudget extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props.currentBudget);
        console.log(this.props);
        return (
            <div>
              
            </div>
        )
       
    }

}

export default EditBudget;