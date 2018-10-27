import * as EXPENSEAPIUtil from '../util/expense_api_util';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const RECEIVE_EXPENSE_ERRORS = 'RECEIVE_EXPENSE_ERRORS';
export const RESET_EXPENSES = 'RESET_EXPENSES';
export const RESET_EXPENSE_ERRORS = 'RESET_EXPENSE_ERRORS';
// export const UPDATE_WITH_DELETED_POST = 'DELETE_POST';
// export const RECEIVE_UPDATED_POST = 'RECEIVE_UPDATED_POST';

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

// export const receivePostErrors = (errors) => ({
//     type: RECEIVE_POST_ERRORS,
//     errors: errors
// })

// export const resetPostErrors = () => ({
//     type: RESET_POST_ERRORS
// })

export const fetchExpenses = (user_id) => {
    return function (dispatch) {
        EXPENSEAPIUtil.fetchexpenses(user_id).then((all_expenses) =>  dispatch(receiveexpenses(all_expenses)))
    }
};

export const createExpense = (user_id, EXPENSE) => {
    return function (dispatch) {
        EXPENSEAPIUtil.createEXPENSE(user_id, EXPENSE).then( (created_EXPENSE) => (
            dispatch(receiveEXPENSE(created_EXPENSE))
        ))
    }
};

// export const createEXPENSE = (user_id, EXPENSE) => {
//     return function (dispatch) {
//         EXPENSEAPIUtil.createEXPENSE(user_id, EXPENSE).then( (created_EXPENSE) => (
//             dispatch(receiveEXPENSE(created_EXPENSE))
//         ), err => (
//             dispatch(receivePostErrors(err.responseJSON))
//         ))
//     }
// };

