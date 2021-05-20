class Api::ReviewsController < ApplicationController 

    def create
        
        @user=User.find(params[:review][:user_id])
        @review = Review.new(review_params)
        if @review.save!
            render :show
        else
            render json: ['Please fill out all necessary review information'], status: 401
        end
    end

    private

   def review_params
    params.require(:review).permit(:user_id, :property_id, :review, :rating)
   end


end