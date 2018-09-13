import {connect} from 'react-redux';
import Highlights from './highlights';
import {fetchCities} from '../actions/city_actions';

const mapStateToProps = (state) => ({
    cities: Object.keys(state.entities.cities).map((key) => state.entities.cities[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchCities: () => dispatch(fetchCities())
});

const HighlightsContainer = connect(mapStateToProps, mapDispatchToProps)(Highlights);

export default HighlightsContainer;