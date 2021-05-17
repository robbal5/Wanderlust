json.properties do
    @properties.each do |property|
        json.set! property.id do
        json.partial! 'api/properties/property', property: property
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