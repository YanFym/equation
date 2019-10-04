Rails.application.routes.draw do
  namespace :api do
  	resources :equations, only: %i[index show create destroy update]
  end
end
