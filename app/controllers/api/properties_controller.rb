class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.all 
        render :index
    end

    def show
        @property = Property.find(params[:id])
        render :show
    end

    private

    def property_params
        params.require(:property).permit(photos: [])
    end
end