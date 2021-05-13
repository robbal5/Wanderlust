
json.payload do
    json.property do
        json.partial! 'api/properties/property', property: @property
    end

    json.reviews do
        @property.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :property_id, :user_id, :review, :rating
            end
        end
    end

    json.amenities do
        @property.amenities.each do |amenity|
            json.set! amenity.id do
                json.extract! amenity, :id, :name, :icon_url
            end
        end
    end

    json.user do
        json.extract!  @property.user, :id, :email, :name, :phone_number, :date_of_birth
    end

    json.address do
        json.extract! @property.address, :city_id, :street_address, :zip_code, :lat, :lng
    end

    json.reservations do
        @property.reservations.each do |reservation|
            json.set! reservation.id do
                json.extract! reservation, :id, :property_id, :user_id, :start_date, :end_date
            end
        end
    end
end

#Will need to include reviews, amenities, user, reservations