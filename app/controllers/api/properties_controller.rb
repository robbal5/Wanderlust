class Api::PropertiesController < ApplicationController

    def index
        
        filters = filter_params
        if filters.values.all?{ |value| value == ''} 
            @properties = Property.with_attached_photos.all
        else
            @properties = Property.filtered_properties(filters)
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

    def property_params
        params.require(:property).permit(photos: [])
    end

    def filter_params 
        params.require(:filters).permit(:placeFilter, :cityFilter)
    end
end