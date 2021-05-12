json.extract! @property, :id, :name, :description
json.photoUrls @property.photos.map { |file| url_for(file) }