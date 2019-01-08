import * as EXPENSEAPIUtil from '../util/expense_api_util';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const RECEIVE_EXPENSE_ERRORS = 'RECEIVE_EXPENSE_ERRORS';
export const RESET_EXPENSES = 'RESET_EXPENSES';
export const RESET_EXPENSE_ERRORS = 'RESET_EXPENSE_ERRORS';

export const receiveExpenses = (expenses) => ({
    type: RECEIVE_EXPENSES,
    expenses: expenses
});

export const receiveExpense = (expense) => ({
    type: RECEIVE_EXPENSE,
    expense: expense
});

export const resetExpenses = () => ({
    type: RESET_EXPENSES,
})

// export const receiveExpenseErrors = (errors) => ({
//     type: RECEIVE_EXPENSE_ERRORS,
//     errors: errors
// })

// export const resetExpenseErrors = () => ({
//     type: RESET_EXPENSE_ERRORS
// })

export const fetchExpenses = (user_id, budget_id) => {
    return function (dispatch) {
        EXPENSEAPIUtil.fetchExpenses(user_id, budget_id).then((all_expenses) =>  dispatch(receiveExpenses(all_expenses)))
    }
};

export const createExpense = (user_id, budget_id, expense) => {
    return function (dispatch) {
        EXPENSEAPIUtil.createExpense(user_id, budget_id, expense).then( (created_expense) => (
            dispatch(receiveExpense(created_expense))
        ))
    }
};


// export const createEXPENSE = (user_id, EXPENSE) => {
//     return function (dispatch) {
//         EXPENSEAPIUtil.createEXPENSE(user_id, EXPENSE).then( (created_EXPENSE) => (
//             dispatch(receiveEXPENSE(created_EXPENSE))
//         ), err => (
//             dispatch(receiveExpenseErrors(err.responseJSON))
//         ))
//     }
// };

