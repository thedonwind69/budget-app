json.array! @all_cities do |city|

    json.id city.id
    json.name city.name
    json.description city.description
    json.numberOfPosts city.posts.length
    json.averageRating city.average_rating
end