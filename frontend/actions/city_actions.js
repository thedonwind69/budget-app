import * as CityAPIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = 'RECEIVE_CITY';

export const receiveCities = (cities) => ({
    type: RECEIVE_CITIES,
    cities: cities
});

export const receiveCity = (city) => ({
    type: RECEIVE_CITY,
    city: city
})

export const fetchCities = () => {
    return function (dispatch) {
        CityAPIUtil.fetchCities().then( (all_cities) => dispatch(receiveCities(all_cities))   )
    }
};

export const fetchCity = (city_id) => {
    return function (dispatch) {
        CityAPIUtil.fetchCity(city_id).then( (single_city) => dispatch(receiveCity(single_city))   )
    }
};