class Api::StatesController < ApplicationController

    def index 
        @states = State.all
        render :index
    end

end