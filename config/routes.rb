Rails.application.routes.draw do
  root 'site#index'
  
  namespace :api do
  	resources :equations, only: %i[index show create destroy update]
  end
end
