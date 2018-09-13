Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :cities, only: [:index, :show] do
      resources :posts, only: [:index, :create]
    end
    resources :posts, only: [:create, :index, :show]
    resources :categories, only: [:index, :show]
    resources :users, only: [:create, :show, :index] do 
      resources :posts, only: [:index, :show, :destroy, :update]
    end
    resource :session, only: [:create, :destroy, :show, :index]
  end

  root "root_page#root"

end
