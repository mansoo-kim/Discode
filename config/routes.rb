Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]

    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:create]
    end
    resources :channels, only: [:show, :update, :destroy]
    resources :conversations, only: [:index, :show, :create, :update]

    resources :friendships, only: [:index, :create]
    patch 'friendships', to: 'friendships#update'
    put 'friendships', to: 'friendships#update'
    delete 'friendships', to: 'friendships#destroy'

    delete 'memberships', to: 'memberships#destroy'
  end
end
