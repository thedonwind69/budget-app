import {connect} from 'react-redux';
import Greeting from './greeting';
import {fetchCities} from '../actions/city_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    cities: Object.keys(state.entities.cities).map((key) => state.entities.cities[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchCities: () => dispatch(fetchCities())
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer;