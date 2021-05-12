class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.with_attached_photos.all
        render :index
    end

    def show
        debugger;
        @property = Property.with_attached_photos.find(params[:id])
        render :show
    end

    private

    def property_params
        params.require(:property).permit(photos: [])
    end
end