

    json.property do
        json.partial! 'api/properties/property', property: @property
    end

    json.reviews do
        @property.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :review, :rating, :created_at, :user_id
                json.extract! @users.find_by(id: review.user_id), :name
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
        json.extract! @property.address, :id, :city_id, :street_address, :zip_code, :lat, :lng
    end

    json.reservations do
        @property.reservations.each do |reservation|
    json.set! reservation.id do
                json.extract! reservation, :id, :property_id,  :start_date, :end_date
            end
        end
    end

    json.property_amenities do
        @property.property_amenities.each do |prop_am|
            json.set! prop_am.id do
                json.extract! prop_am, :id, :property_id, :amenity_id
            end
        end
    end


#Will need to include reviews, amenities, user, reservations