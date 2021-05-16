# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'

User.delete_all
# Property.delete_all
# Amenity.delete_all
# PropertyAmenity.delete_all
# Review.delete_all
# Reservation.delete_all
# Address.delete_all
City.delete_all
State.delete_all
 

amenities = ['Appliances', 'Iron', 'Dishwasher', 'Utilities', 
'Free parking', 'Kitchen', 'Wifi', 'Fireplace', 
'Hangers', 'TV', 'Cable', 'Washer', 'Dryer', 
'Iron', 'Air Conditioning', 'Smoke Alarm', 
'Heating', 'Cookware', 'Patio', 'Rooftop',
'Smoke free', 'Deep fryer', 'Library']

#States
florida = State.create(name: 'Florida')
illinois = State.create(name: 'Illinois')
new_york = State.create(name: 'New York')
california = State.create(name: 'California')

#Cities
chicago = City.create(name: 'Chicago', state_id: illinois.id, lat: 41.8865, lng: -87.64264)
new_york_city = City.create(name: 'New York', state_id: new_york.id, lat: 40.73331, lng: -73.9893)
san_francisco = City.create(name: 'San Francisco', state_id: california.id, lat: 37.78632, lng: -122.42043)
san_diego = City.create(name: 'San Diego', state_id: california.id)
miami = City.create(name: 'Miami', state_id: florida.id, lat: 25.76802, lng: -80.19409)
newark = City.create(name: 'Newark', state_id: new_york.id)
charlotte = City.create(name: 'Charlotte', state_id: illinois.id)
middleton = City.create(name: 'Middleton', state_id: florida.id)

#USERS
users = [];
10.times do |i|
    user = {}
    user.email = Faker::Internet.email
    user.password = 'password'
    user.name = Faker::Name.name
    user.phone_number = 123456789
    user.date_of_birth = DateTime.now()
    users << user
end
users.each do |person|
    person.save
end

#Amenities

# amenities.each do |amenity|
#     Amenity.create({name: amenity})
# end

#Addresses
addresses = []

#Chicago
# 10.times do
#     address = {}
#     address.city_id = City.pluck(:id).sample
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 41.8865 + (rand_dec * [1,-1].sample)
#     address.lng = -87.64264 + (rand_dec * [1,-1].sample)
#     addresses << address
# end
#San Francisco
# 10.times do
#     address = {}
#     address.city_id = san_francisco.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 37.78632 + (rand_dec * [1,-1].sample)
#     address.lng = -122.42043 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

#Miami
# 10.times do
#     address = {}
#     address.city_id = miami.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 40.73331 + (rand_dec * [1,-1].sample)
#     address.lng = -80.19409 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

#New York
# 10.times do
#     address = {}
#     address.city_id = new_york_city.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 25.76802 + (rand_dec * [1,-1].sample)
#     address.lng = -73.9893 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

# addresses.each do |address|
#     Address.create(address)
# end

#Properties
# address_ids = Address.pluck(:id)
# adjectives = ['Beautiful', 'Stunning', 'Gorgeous', 'Lovely']
# places = ['Home', 'Place', 'Spot', 'Destination']
# properties = []
# numbers =  (1..5).to_a
# address_ids.each do |idx|
#     property = {}
#     property.address_id = idx
#     property.name = adjectives.sample + ' ' + places.sample = ' in ' + Faker::Address.community
#     property.number_of_guests = numbers.sample * 2
#     property.number_of_bedrooms = numbers.sample
#     property.number_of_beds = numbers.sample
#     property.number_of_bathrooms = numbers.sample
#     property.type_of_place = ['Entire place', 'Hotel room', 'Private room'].sample
#     property.enhanced_clean = [true, false].sample
#     property.self_check_in = [true, false].sample
#     property.price = (rand * 200).floor
#     properties << property
# end

# properties.each do |prop|
#     Property.create(prop)
# end 

# property_ids = Property.pluck(:id)
# amenity_ids = Amenity.pluck(:id)
 
#PropAmenities
# property_ids.each do |p_id|
#     5.times do
#         PropertyAmenity.new({property_id:p_id, amenity_id: amenity_ids.sample)
#     end
# end

# sentences = ['Loved our stay! ', 'Very clean and well kept. ', 'We wanted to stay forever. ', 'Great access to the surrounding areas. ',
#             'Very spacious. ', 'Great stay with the family. ', 'Would highly recommend to others. ', 'Great value. ', 
#             'Owner was very accommodating. ', 'Great restaurants and activites nearby. ', 'Kitchen appliances were a huge plus. ', 'We loved the city. ',
#             'Very comfortable living space. ', 'More than we bargained for. ', 'Amazing place for all ages. ']


# reviews = []
# property_ids.each do |p_id|
#     5.times do
#         review = {}
#         review.property_id = p_id
#         review.user_id = User.pluck(:id)
#         review.review = sentences.sample + sentences.sample + sentences.sample
#         review.rating = [4,5].sample
#         reviews << review
#     end
# end

# reviews.each do |rev|
#     Review.create(rev)
# end

# # reservations
# months = (1..12).to_a
# starts - (1..25).to_a
# duration = (1..4).to_a








User.create(email: 'DemoUser@gmail.com', password: 'Demouser', name: 'Demo User')