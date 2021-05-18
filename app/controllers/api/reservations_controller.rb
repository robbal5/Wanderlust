class Api::ReservationsController < ApplicationController 

    def create
        
        @review = Reservation.new(review_params)
        if @review.save!
            render :show
        else
            render json: ['Please fill out all necessary review information'], status: 401
        end
    end

    private

   def reservation_params
    params.require(:reservation).permit(:user_id, :property_id, :start_date, :end_date)
   end


end