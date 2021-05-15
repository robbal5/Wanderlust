class Api::PropertiesController < ApplicationController

    def index
        
        filters = filter_params
        
        if valid_searches(filters['cityFilter'].downcase, filters['placeFilter'].downcase)
            @properties = Property.filtered_properties(filters)
        else
            @properties = Property.with_attached_photos.all
        end
        @addresses = Address.all
        render :index
    end

    def show
        
        @property = Property.with_attached_photos.includes(:reviews, :amenities, :reservations, :user, :address).find(params[:id])
        @users = User.all
        render :show
    end

    private

    def valid_searches(city, place)
        
        ['entire place', 'hotel room', 'private room', ''].include?(place) && ['miami', 'new york', 'san francisco', 'chicago', ''].include?(city)
    end

    def property_params
        params.require(:property).permit(photos: [])
    end

    def filter_params 
        params.require(:filters).permit(:placeFilter, :cityFilter)
    end
end