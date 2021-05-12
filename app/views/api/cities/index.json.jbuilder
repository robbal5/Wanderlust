@cities.each do |city|
    json.set! city.id do
        json.extract! city, :id, :name, :state_id
    end
end