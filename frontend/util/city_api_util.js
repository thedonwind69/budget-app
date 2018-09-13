

export const fetchCities = () => {

    return (
        $.ajax({
           method: 'GET',
           url: '/api/cities' 
        })
    )


};

export const fetchCity = (city_id) => {

    return $.ajax({
        method: 'GET',
        url: `/api/cities/${city_id}`,
    })


};