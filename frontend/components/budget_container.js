import {connect} from 'react-redux';
import Budget from './budget'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({

})

const BudgetContainer = connect(mapStateToProps, mapDispatchToProps)(Budget);

export default BudgetContainer;