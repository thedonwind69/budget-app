import {connect} from 'react-redux';
import EditBudget from './edit_budget'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    currentBudget: state.entities.budgets[ownProps.match.params.budget_id]
})

const mapDispatchToProps = (dispatch) => ({

})

const EditBudgetContainer = connect(mapStateToProps, mapDispatchToProps)(EditBudget);

export default EditBudgetContainer;