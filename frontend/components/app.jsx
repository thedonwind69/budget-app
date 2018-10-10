import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import NavContainer from './nav_container';

import Footer from './footer';

import GreetingContainer from './greeting_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx';

import SessionFormContainer from './session_form_container';

import YourBudgetsContainer from './your_budgets_container';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                    <NavContainer />

                    <Route exact path="/" component={GreetingContainer} />

                    <Route path="/your_budgets" component={YourBudgetsContainer} />

                    <AuthRoute path="/login" component={SessionFormContainer} />
                    <AuthRoute path="/signup" component={SessionFormContainer} />

                    <Footer />
            </div>
        )
    }


}

export default App;