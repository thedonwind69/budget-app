import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class FormButton extends React.Component {
    constructor(props) {
        super(props); 
    }

    render () {  
        const { currentUser } = this.props;
        if (currentUser) {
                    return (
                        <div>
                            <button 
                                class="city-post-form-button"
                                onClick={this.props.toggleForm}
                                >
                                Create Review
                            </button>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p class='not-logged-in-message'>You are not logged in. To write a review, please <Link to='/login'>
                            log in</Link> or <Link to='/signup'> sign up!</Link>
                            </p>
                        </div>
                    )
                }   
    }
}

export default FormButton;