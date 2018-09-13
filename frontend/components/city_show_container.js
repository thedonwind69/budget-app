import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCity} from '../actions/city_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = (state, ownProps) => ({
    currentCity: state.entities.cities[ownProps.match.params.city_id],
    currentUser: state.session.currentUser,
    categories: Object.keys(state.entities.categories).map((key) => state.entities.categories[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    fetchCategories: () => dispatch(fetchCategories())
});

const CityShowContainer = connect(mapStateToProps, mapDispatchToProps)(CityShow);

export default CityShowContainer;