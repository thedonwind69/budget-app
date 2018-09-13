import {connect} from 'react-redux';

import HomePage from './home_page';

import {fetchCities} from '../actions/city_actions';

const mapStateToProps = (state) => ({
    cities: Object.keys(state.entities.cities).map((key) => state.entities.cities[key])
})

const mapDispatchToProps = (dispatch) => ({

    fetchCities: () => dispatch(fetchCities())
    
})


const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;