class Api::ReservationsController < ApplicationController 

    def index
        @reservations = User.find(params[:user_id]).reservation
        render :index
    end    

    def create
        @reservation = Reservation.new(review_params)
        if @reservation.save!
            render :show
        else
            render json: ['Please fill out all necessary information'], status: 401
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render :show
        else
            render json: ['Update failed, please fill out all necessary information'], status: 401
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end

    private

   def reservation_params
    params.require(:reservation).permit(:user_id, :property_id, :start_date, :end_date)
   end


end