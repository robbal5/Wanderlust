@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :guests, :start_date, :end_date, :user_id, :property_id
    end
end