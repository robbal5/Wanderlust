# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'

# User.delete_all #WORKS
# Property.delete_all #WORKS
# Amenity.delete_all #WORKS
# PropertyAmenity.delete_all #WORKS
# Review.delete_all #WORKS
# Reservation.delete_all
# Address.delete_all #WORKS
# City.delete_all #WORKS
# State.delete_all #WORKS
 

amenities = ['Appliances', 'Iron', 'Dishwasher', 'Utilities', 
'Free parking', 'Kitchen', 'Wifi', 'Fireplace', 
'Hangers', 'TV', 'Cable', 'Washer', 'Dryer', 
'Iron', 'Air Conditioning', 'Smoke Alarm', 
'Heating', 'Cookware', 'Patio', 'Rooftop',
'Smoke free', 'Deep fryer', 'Library']

#States
# florida = State.create(name: 'Florida')
# illinois = State.create(name: 'Illinois')
# new_york = State.create(name: 'New York')
# california = State.create(name: 'California')

#Cities
# chicago = City.create(name: 'Chicago', state_id: illinois.id, lat: 41.8865, lng: -87.64264)
# new_york_city = City.create(name: 'New York', state_id: new_york.id, lat: 40.73331, lng: -73.9893)
# san_francisco = City.create(name: 'San Francisco', state_id: california.id, lat: 37.78632, lng: -122.42043)
# san_diego = City.create(name: 'San Diego', state_id: california.id)
# miami = City.create(name: 'Miami', state_id: florida.id, lat: 25.76802, lng: -80.19409)
# newark = City.create(name: 'Newark', state_id: new_york.id)
# charlotte = City.create(name: 'Charlotte', state_id: illinois.id)
# middleton = City.create(name: 'Middleton', state_id: florida.id)

#USERS
# users = [];
# 20.times do |i|
#     user = User.new
#     user.email = Faker::Internet.email
#     user.password = 'password'
#     user.name = Faker::Name.name
#     user.phone_number = 123456789
#     user.date_of_birth = DateTime.now()
#     users << user
# end
# users.each do |person|
#     person.save
# end

#Amenities

# amenities.each do |amenity|
#     Amenity.create({name: amenity})
# end

#Addresses
addresses = []

#Chicago
# 5.times do
#     address = Address.new
    
#     address.city_id = chicago.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 41.8865 + (rand_dec * [1,-1].sample)
#     address.lng = -87.64264 + (rand_dec * [1,-1].sample)
#     addresses << address
# end
#San Francisco
# 5.times do
#     address = Address.new
#     address.city_id = san_francisco.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 37.78632 + (rand_dec * [1,-1].sample)
#     address.lng = -122.42043 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

#Miami
# 5.times do
#     address = Address.new
#     address.city_id = miami.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 40.73331 + (rand_dec * [1,-1].sample)
#     address.lng = -80.19409 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

#New York
# 5.times do
#     address = Address.new
#     address.city_id = new_york_city.id
#     address.street_address = Faker::Address.street_address
#     address.zip_code = Faker::Address.zip_code
#     rand_dec = rand/10
#     address.lat = 25.76802 + (rand_dec * [1,-1].sample)
#     address.lng = -73.9893 + (rand_dec * [1,-1].sample)
#     addresses << address
# end

# addresses.each do |address|
#     address.save
# end

#Properties
# address_ids = Address.pluck(:id)
# user_ids = User.pluck(:id)
# adjectives = ['Beautiful', 'Stunning', 'Gorgeous', 'Lovely', 'Spacious', 'City-center', 'Lively']
# places = ['Home', 'Place', 'Spot', 'Destination', 'House', 'Walk-up', 'Apartment', 'Condo', 'Condominium', 'Oasis']
# properties = []
# numbers =  (1..5).to_a
# address_ids.each do |idx|
#     property = Property.new
#     property.address_id = idx
#     property.user_id = user_ids.sample
#     property.name = adjectives.sample + ' ' + places.sample + ' in ' + Faker::Address.community
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
#    prop.save
# end 

property_ids = Property.pluck(:id)
amenity_ids = Amenity.pluck(:id)

# description = 'Great top floor place along a bustline part of the neighborhood. Lovely bedrooms and living spaces, along with kitchen and accompanying amenities. Coin operated laundry with access to the rooftop. Warm home to visit for all.
# Very fun part of town with exciting bars and well known restaurants. Great neighborhood with plenty to keep you busy during your stay.
# Quick walk to the public transit gets you Downtown or out to the airport.'

# Property.all.each do |prop|
#     prop.description = description
#     prop.save
# end
 
# PropAmenities
# property_ids.each do |p_id|
#     7.times do
#         PropertyAmenity.create({property_id:p_id, amenity_id: amenity_ids.sample})
#     end
# end

sentences = ['Loved our stay! ', 'Very clean and well kept. ', 'We wanted to stay forever. ', 'Great access to the surrounding areas. ',
            'Very spacious. ', 'Great stay with the family. ', 'Would highly recommend to others. ', 'Great value. ', 
            'Owner was very accommodating. ', 'Great restaurants and activites nearby. ', 'Kitchen appliances were a huge plus. ', 'We loved the city. ',
            'Very comfortable living space. ', 'More than we bargained for. ', 'Amazing place for all ages. ']


# reviews = []
# property_ids.each do |p_id|
#     5.times do
#         review = Review.new
#         review.property_id = p_id
#         review.user_id = User.pluck(:id).sample
#         review.review = sentences.sample + sentences.sample + sentences.sample
#         review.rating = [4,5].sample
#         reviews << review
#     end
# end


# reviews.each do |rev|
#     rev.save
# end

# # reservations
# months = (1..12).to_a
# starts - (1..25).to_a
# duration = (1..4).to_a


photo_urls = [
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/aaron-huber-G7sE2S4Lab4-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/artesian_main_photo.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/bedroom.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/bedroom2.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/brian-babb-XbwHrt87mQ0-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/collov-home-design--aDGbdTsBZg-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/ian-dooley-_-JR5TxKNSo-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/im3rd-media-dn5VihVxloc-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/jason-briscoe-AQl-J19ocWE-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/jason-briscoe-UV81E0oXXWQ-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/kam-idris-_HqHX3LBN18-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/kara-eads-L7EwHkq1B2s-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/kelsey-dody-mt2QzllH814-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/kirill-9uH-hM0VwPg-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/kitchen.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/lakehouse.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/michael-oxendine-GHCVUtBECuY-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/minh-pham-7pCFUybP_P8-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/naomi-hebert-2dcYhvbHV-M-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/nathan-fertig-FBXuXp57eM0-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/outsite-co-R-LK3sqLiBw-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/r-architecture-TRCJ-87Yoh0-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/roam-in-color-AwOG1tC5buE-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/roam-in-color-z3QZ6gjGRt4-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/scott-webb-1ddol8rgUH8-unsplash.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/skyline.jpg',
    'https://wanderlust-seeds.s3.us-east-2.amazonaws.com/seed_photos/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg'
]



#PHOTOS
Property.all.each do |property|
    5.times do |i|
        file = URI.open(photo_urls.sample)
        property.photos.attach(io: file, filename: "photo_#{i}.jpg")
    end
end



# User.create(email: 'DemoUser@gmail.com', password: 'Demouser', name: 'Demo User')

# demo = User.find_by(name: 'Demo User')

# Reservation.create(user_id: demo.id, property_id: Property.first.id, start_date: Time.new(2021,2,3).to_date, end_date: Time.new(2001,2,6).to_date)
# Reservation.create(user_id: demo.id, property_id: Property.second.id, start_date: Time.new(2021,3,4).to_date, end_date: Time.new(2001,3,7).to_date)
# Reservation.create(user_id: demo.id, property_id: Property.third.id, start_date: Time.new(2021,4,5).to_date, end_date: Time.new(2001,4,7).to_date)
# Reservation.create(user_id: demo.id, property_id: Property.fourth.id, start_date: Time.new(2021,5,8).to_date, end_date: Time.new(2001,5,10).to_date)

