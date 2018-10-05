import {connect} from 'react-redux';

import YourBudgets from './your_budgets';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({

})

const YourBudgetsContainer = connect(mapStateToProps, mapDispatchToProps)(YourBudgets);

export default YourBudgetsContainer;