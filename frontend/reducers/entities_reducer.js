import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';
import categoriesReducer from './categories_reducer';
import postsReducer from './posts_reducer';
import postErrorsReducer from './post_errors_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    cities: citiesReducer,
    categories: categoriesReducer,
    posts: postsReducer,
    postErrors: postErrorsReducer,
    user: usersReducer
})

export default entitiesReducer;