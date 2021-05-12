json.extract! @property, :id, :name, :description
@property.photos.each_with_index do |photo, idx|
    json.set! idx do
        json.photo url_for(photo)
    end
end