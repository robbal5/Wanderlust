# Wanderlust

Link: [Wanderlust](https://wanderlust-aa.herokuapp.com/?#/)

# Overview
 Wanderlust is an AirBnb clone with primary features including:
* User Authentication
* Search with a Map feature
* Review and Ratings tracking
* Bookings Management

## Technologies
 
 * Rails backend and PostgreSQL DB
 * React and Redux frontend
 * AWS S3 for image storage
 * Google Maps for search/mapping feature
 * React Date Range Library for bookings and calendar feature

## User Authentication

Users are able to provide basic information to create an account on Wanderlust. A demo user feature is also included to allow users to access the full functionality of the site without needing to provide personal information. Current functionality restricts bookings and reviews to only signed in users, the remainder of the site is functionally available.

## Search/Google Maps

Users have access to buttons with preselected search criteria as well as a city search bar at the top of the page. The results are displayed on the property search page accompanied by their locations on an integrated Google Map. Users can filter results further down on the search panel and see results update in real time. 

## Review and Ratings tracking

Signed in users can create and edit reviews for properties. These reviews are visible from the property details page and their accumulating total (average rating, total # of reviews) is calculated and visible for each property.

## Booking Management

Signed in users can create and manage bookings across properties on the site. The booking feature incorporates a third party calendar software to allow for seamless date ranges to be selected and managed in the creation process. Bookings take into account existing reservations against a given property, so properties are not able to be double booked. Each user has a trips page where they can manage their upcoming reservations, as well as view any past trips they had taken.

## Technical Challenges

### Search and Map Integration
Custom filter actions had to be written to coordinate and call for map display adjustments under certain conditions, such as a change in filtering city or clearing the filters all together.

### Booking Logic
Logic needed to be added for a property to take into account all existing reservations before accepting a new one. This prevented a property from becoming double booked by two different users.



### Future Scope Features
* Implement O Auth and double authentication with email
* Add more criteria to the filter (room #, guests, etc.)
* Create better UI for reservation management
