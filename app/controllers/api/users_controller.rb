class Api::UsersController < ApplicationController
    

     def show
        @user = User.find_by(email: params[:email])
        render :show
    end

    def create
        
        @user = User.new(user_params)
        

        if @user.save
            
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422

        end
    end

    private

    def user_params
        
        params.require(:user).permit(:email, :password, :name, :phone_number, :date_of_birth)
    end

end