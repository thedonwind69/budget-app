# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.delete_all
City.delete_all

category1 = Category.create(name: 'Food')
category2 = Category.create(name: 'Culture')
category3 = Category.create(name: 'Nightlife')
category4 = Category.create(name: 'Economy')


city1 = City.create(name: 'Atlanta')
city2 = City.create(name: 'Austin')
city3 = City.create(name: 'Boston')
city4 = City.create(name: 'Charlotte')
city5 = City.create(name: 'Chicago')
city6 = City.create(name: 'Dallas')
city7 = City.create(name: 'Denver')
city8 = City.create(name: 'Houston')
city9 = City.create(name: 'Las Vegas')
city10 = City.create(name: 'Los Angeles')
city11 = City.create(name: 'Miami')
city12 = City.create(name: 'Minneapolis')
city13 = City.create(name: 'New York')
city14 = City.create(name: 'Philadelphia')
city15 = City.create(name: 'Phoenix')
city16 = City.create(name: 'Portland')
city17 = City.create(name: 'San Diego')
city18 = City.create(name: 'San Francisco')
city19 = City.create(name: 'Seattle')
city20 = City.create(name: 'Washington DC')


