import {connect} from 'react-redux';
import NewBudgetForm from './new_budget_form';


const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({

})

const NewBudgetFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewBudgetForm);

export default NewBudgetFormContainer;