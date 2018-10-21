import {connect} from 'react-redux';
import EditBudget from './edit_budget'
import {fetchBudgets, createBudget, resetBudgets} from '../actions/budget_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    currentBudget: state.entities.budgets[ownProps.match.params.budget_id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchBudgets: (user_id) => dispatch(fetchBudgets(user_id)),
    resetBudgets: () => dispatch(resetBudgets())
})

const EditBudgetContainer = connect(mapStateToProps, mapDispatchToProps)(EditBudget);

export default EditBudgetContainer;