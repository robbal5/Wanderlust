class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.all 
        render :index
    end

    def show

    end
end