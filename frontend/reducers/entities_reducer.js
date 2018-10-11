import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import budgetsReducer from './budgets_reducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    budgets: budgetsReducer
})

export default entitiesReducer;