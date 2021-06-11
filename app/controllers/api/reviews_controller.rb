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

    def update

    end

    def destroy
        
        @user = User.find(params[:user_id])
        @review = Review.find(params[:id])
        if @review
            @review.destroy
            render :show
        else
            render json: ['No matching review found'], status: 401
        end

    end

    private

   def review_params
    params.require(:review).permit(:user_id, :property_id, :review, :rating)
   end


end