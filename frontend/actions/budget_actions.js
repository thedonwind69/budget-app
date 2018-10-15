import * as BudgetAPIUtil from '../util/budget_api_util';
export const RECEIVE_BUDGETS = 'RECEIVE_BUDGETS';
export const RECEIVE_BUDGET = 'RECEIVE_BUDGET';
export const RECEIVE_BUDGET_ERRORS = 'RECEIVE_BUDGET_ERRORS';
export const RESET_BUDGETS = 'RESET_BUDGETS';
export const RESET_BUDGET_ERRORS = 'RESET_BUDGET_ERRORS';
// export const UPDATE_WITH_DELETED_POST = 'DELETE_POST';
// export const RECEIVE_UPDATED_POST = 'RECEIVE_UPDATED_POST';

export const receiveBudgets = (budgets) => ({
    type: RECEIVE_BUDGETS,
    budgets: budgets
});

export const receiveBudget = (budget) => ({
    type: RECEIVE_BUDGET,
    budget: budget
});

export const resetBudgets = () => ({
    type: RESET_BUDGETS,
})

// export const receivePostErrors = (errors) => ({
//     type: RECEIVE_POST_ERRORS,
//     errors: errors
// })

// export const resetPostErrors = () => ({
//     type: RESET_POST_ERRORS
// })

export const fetchBudgets = (user_id) => {
    return function (dispatch) {
        BudgetAPIUtil.fetchBudgets(user_id).then((all_budgets) =>  dispatch(receiveBudgets(all_budgets)))
    }
};

export const createBudget = (user_id, budget) => {
    return function (dispatch) {
        BudgetAPIUtil.createBudget(user_id, budget).then( (created_budget) => (
            dispatch(receiveBudget(created_budget))
        ))
    }
};

// export const createBudget = (user_id, budget) => {
//     return function (dispatch) {
//         BudgetAPIUtil.createBudget(user_id, budget).then( (created_budget) => (
//             dispatch(receiveBudget(created_budget))
//         ), err => (
//             dispatch(receivePostErrors(err.responseJSON))
//         ))
//     }
// };

