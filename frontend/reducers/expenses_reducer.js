import {RECEIVE_EXPENSES, RECEIVE_EXPENSE, RESET_EXPENSES} from '../actions/expense_actions';
import merge from 'lodash/merge';

const expensesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_EXPENSES:
            const newState = {};
            action.expenses.forEach((expense) => {
                newState[expense.id] = expense;
            });
            return newState;
        case RECEIVE_EXPENSE:
            const newExpense = {[action.expense.id]: action.expense};
            return merge({}, state, newExpense);
        case RESET_EXPENSES:
            return {};
        default:
            return state;
    }
};

export default expensesReducer