import React from 'react';
import CityIndexItem from './city_index_item';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCities();
    }

    render () {
        const all_cities = this.props.cities.map((single_city, index) => {
            return (
                <CityIndexItem key={index} city={single_city} />
            )
        })

        return (
          
                <div class="home-page-container">

                    <div class="city-item-row">
                        {all_cities.slice(0, 5)}
                    </div>
                        
                    <div class="city-item-row">
                        {all_cities.slice(5, 10)}
                    </div>

                    <div class="city-item-row">
                        {all_cities.slice(10, 15)}
                    </div>

                    <div class="city-item-row">
                        {all_cities.slice(15, 20)}
                    </div>

                </div>
       
        )
    }

}

export default HomePage;