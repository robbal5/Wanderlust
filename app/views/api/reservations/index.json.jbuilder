
json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :guests, :start_date, :end_date, :user_id, :property_id
        end
    end
end

json.properties do
    @properties.each do |property|
        json.set! property.id do
            json.partial! 'api/properties/property', property: property
            reviews = property.reviews
            num_reviews = reviews.length
            total_score = reviews.map {|review| review.rating}.sum
            json.num_reviews num_reviews
            json.review_avg ((total_score*1.0)/num_reviews)
        end
    end
end

