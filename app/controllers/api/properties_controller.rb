class Api::PropertiesController < ApplicationController

    def index
        debugger;
        @properties = Property.with_attached_photos.all
        @addresses = Address.all
        render :index
    end

    def show
        
        @property = Property.with_attached_photos.includes(:reviews, :amenities, :reservations, :user, :address).find(params[:id])
        @users = User.all
        render :show
    end

    private

    def property_params
        params.require(:property).permit(photos: [])
    end
end