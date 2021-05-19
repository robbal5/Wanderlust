
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
        end
    end
end

