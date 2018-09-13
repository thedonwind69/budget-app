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

import UserShowContainer from './user_show_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx';

import SessionFormContainer from './session_form_container';

import HomePageContainer from './home_page_container';

import CityShowContainer from './city_show_container';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                    <NavContainer />

                    <Route exact path="/" component={GreetingContainer} />

                    <Route path="/home" component={HomePageContainer} />

                    <Route path="/cities/:city_id" component={CityShowContainer} />

                    <Route path="/users/:user_id" component={UserShowContainer} />

                    <AuthRoute path="/login" component={SessionFormContainer} />
                    <AuthRoute path="/signup" component={SessionFormContainer} />

        

                    
                    <Footer />
            </div>
        )
    }


}

export default App;