class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            #this will be the user view
            render @user
        else
            render json: @users.errors.full_messages, status: 422

        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :name, :phone_number, :date_of_birth)
    end

end