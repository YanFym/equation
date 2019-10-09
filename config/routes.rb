Rails.application.routes.draw do
  root to: redirect('/equations')
  
  get 'equations', to: 'site#index'
  get 'equations/new', to: 'site#index'
  get 'equations/:id', to: 'site#index'
  get 'equations/:id/edit', to: 'site#index'

  namespace :api do
  	resources :equations, only: %i[index show create destroy update]
  end
end
