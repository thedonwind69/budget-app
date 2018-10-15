import {connect} from 'react-redux';
import NewBudgetForm from './new_budget_form';
import {fetchBudgets, createBudget} from '../actions/budget_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})
    
const mapDispatchToProps = (dispatch) => ({
    fetchBudgets: (budgets) => dispatch(fetchBudgets(budgets)),
    createBudget: (user_id, budget) => dispatch(createBudget(user_id, budget))
})

const NewBudgetFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewBudgetForm);

export default NewBudgetFormContainer;