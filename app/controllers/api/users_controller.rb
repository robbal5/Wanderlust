class Api::UsersController < ApplicationController
    

     def show
        @user = User.find_by(email: params[:email])
        render :show
    end

    def create
        debugger
        @user = User.new(user_params)
        debugger

        if @user.save
            debugger
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422

        end
    end

    private

    def user_params
        debugger
        params.require(:user).permit(:email, :password, :name, :phone_number, :date_of_birth)
    end

end