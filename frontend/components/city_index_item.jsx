import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

class CityIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Link to={`/cities/${this.props.city.id}`}>
                <div class={`city-item ${this.props.city.name.split(' ').join('')}`}>
                </div>
            </Link>
        )
    }

}

export default CityIndexItem;