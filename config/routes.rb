# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                  api_user GET    /api/user(.:format)                                                                      api/users#show {:format=>:json}
#                           POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#            api_properties GET    /api/properties(.:format)                                                                api/properties#index {:format=>:json}
#              api_property GET    /api/properties/:id(.:format)                                                            api/properties#show {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create, :show] 
    
    resources :users do
       resources :reviews, only: [:create, :index, :update, :destroy]
      resources :reservations, only: [:create, :index, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :properties, only: [:index, :show]
    resources :cities, only: [:index]
    resources :states, only: [:index]
    # resources :amenities, only: [:index]

  end

  root "static_pages#root"
end
