@properties.each do |property|
    debugger;
    json.set property.id do
       json.partial! 'api/properties/property', property: property
    end
end