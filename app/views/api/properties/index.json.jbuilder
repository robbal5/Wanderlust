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

json.addresses do
    @addresses.each do |address|
        json.set! address.id do
            json.extract! address, :city_id, :street_address, :zip_code, :lat, :lng, :id
        end
    end
end