class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        unless current_user
            #check the correct rendering here
            render json: ['Must be logged in as an active user'], status: 401
        end
    end

end