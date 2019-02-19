import {connect} from 'react-redux';
import YourBudgets from './your_budgets';
import {fetchBudgets, resetBudgets} from '../actions/budget_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    currentUserBudgets: Object.keys(state.entities.budgets).map((key) => state.entities.budgets[key]),
})

const mapDispatchToProps = (dispatch) => ({
    fetchBudgets: (user_id) => dispatch(fetchBudgets(user_id)),
    resetBudgets: () => dispatch(resetBudgets()),
})

const YourBudgetsContainer = connect(mapStateToProps, mapDispatchToProps)(YourBudgets);

export default YourBudgetsContainer;