import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import budgetsReducer from './budgets_reducer';
import expensesReducer from './expenses_reducer';
import expensesErrorsReducer from './expenses_errors_reducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    budgets: budgetsReducer,
    expenses: expensesReducer,
    expensesErrors: expensesErrorsReducer
})

export default entitiesReducer;