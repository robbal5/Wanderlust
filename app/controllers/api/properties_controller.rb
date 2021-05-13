class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.with_attached_photos.all
        render :index
    end

    def show
        
        @property = Property.with_attached_photos.includes(:reviews, :amenities, :reservations, :user, :address).find(params[:id])
        
        render :show
    end

    private

    def property_params
        params.require(:property).permit(photos: [])
    end
end