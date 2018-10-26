import {RECEIVE_BUDGETS, RECEIVE_BUDGET, RESET_BUDGETS} from '../actions/BUDGET_actions';
import merge from 'lodash/merge';

const budgetsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BUDGETS:
            // return action.budgets;
            const newState = {};
            action.budgets.forEach((budget) => {
                newState[budget.id] = budget;
            });
            return newState;
        case RECEIVE_BUDGET:
            const newBudget = {[action.budget.id]: action.budget};
            return merge({}, state, newBudget);
        case RESET_BUDGETS:
            return {};
        default:
            return state;
    }
};

export default budgetsReducer