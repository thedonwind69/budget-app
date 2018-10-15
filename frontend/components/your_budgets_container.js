import {connect} from 'react-redux';
import YourBudgets from './your_budgets';
import {fetchBudgets, createBudget} from '../actions/budget_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    fetchBudgets: (user_id) => dispatch(fetchBudgets(user_id)),
})

const YourBudgetsContainer = connect(mapStateToProps, mapDispatchToProps)(YourBudgets);

export default YourBudgetsContainer;