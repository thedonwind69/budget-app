
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import {fetchCities, fetchCity} from './actions/city_actions';

import {fetchPosts} from './actions/post_actions';

window.fetchCities = fetchCities;
window.fetchCity = fetchCity;
window.fetchPosts = fetchPosts;

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

});