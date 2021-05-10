class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            #this will be the user view
            render @user
        else
            render json: ['Invalid username/email combination'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            #return the user info
        else
            render json: ['No user currently signed in'], status: 404
        end
    end
end