Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]

    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:create]
    end
    resources :channels, only: [:update, :destroy]
    resources :conversations, only: [:index, :show]

    delete 'memberships', to: 'memberships#destroy'
  end
end
