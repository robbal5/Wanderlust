json.reservation do
    json.extract! @reservation, :property_id, :id, :guests, :user_id, :start_date, :end_date
end