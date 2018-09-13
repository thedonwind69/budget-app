import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {fetchCities, fetchCity} from '../actions/city_actions';

const mapStateToProps = (state, ownProps) => ({
    cities: Object.keys(state.entities.cities).map((key) => state.entities.cities[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch(fetchCity(city_id))
})

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;