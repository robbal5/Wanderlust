class Api::ReservationsController < ApplicationController 

    def index
        @reservations = User.find(params[:user_id]).reservations
        @properties = @reservations.pluck(:property_id)
        @properties.map! do |prop_id|
            Property.includes(:reviews).find(prop_id)
        end
        render :index
    end    

    def create
        
        @reservation = Reservation.new(reservation_params)
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
    end

    def destroy
        
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end

    private

   def reservation_params
    params.require(:reservation).permit(:guests, :user_id, :property_id, :start_date, :end_date)
   end


end