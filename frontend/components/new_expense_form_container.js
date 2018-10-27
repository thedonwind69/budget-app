import {connect} from 'react-redux';
import NewExpenseForm from './new_expense_form';
import {fetchExpenses, createExpense, resetExpenses} from '../actions/expense_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    currentExpenses: state.entities.expenses
})
    
const mapDispatchToProps = (dispatch) => ({
    fetchExpenses: (user_id, budget_id) => dispatch(fetchExpenses(user_id, budget_id)),
    createExpense: (user_id, budget_id, expense) => dispatch(createExpense(user_id, budget_id, expense)),
    resetExpenses: () => dispatch(resetExpenses())
})

const NewExpenseFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewExpenseForm);

export default NewExpenseFormContainer;