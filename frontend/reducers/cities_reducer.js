import { RECEIVE_CITIES, RECEIVE_CITY} from '../actions/city_actions';
import merge from 'lodash/merge';


const citiesReducer = (state = {}, action) => {

    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CITIES:
            const newState = {};
            action.cities.forEach(city => {
                newState[city.id] = city;
            });
            return newState;
        case RECEIVE_CITY:
            const newCity = {[action.city.id]: action.city};
            return merge({}, state, newCity);
        default:  
            return state;
    }





};




export default citiesReducer;