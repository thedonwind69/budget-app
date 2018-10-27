export const fetchExpenses = (user_id, budget_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${user_id}/budgets/${budget_id}/expenses`
    })
};

export const createExpense = (user_id, budget_id, expense) => (
    $.ajax({
        method: 'POST',
        url: `api/users/${user_id}/budgets/${budget_id}/expenses`,
        data: {expense}
    })
);

// export const deleteBudget = (user_id, budget_id) => (
//     $.ajax({
//         method: 'DELETE',
//         url: `api/users/${user_id}/budgets/${budget_id}`
//     })
// )
