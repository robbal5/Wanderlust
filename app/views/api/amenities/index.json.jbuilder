@amenities.each do |amenity|
    json.set! amenity.id do
        json.extract! amenity, :id, :name, :icon_url
    end
end