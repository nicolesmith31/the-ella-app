Rails.application.routes.draw do
  root 'workouts#index'
  devise_for :users

  get 'calculator/calculate'
  
  get 'generator/generate'

  get 'workouts/new'

  resources :workouts
  resources :exercises


  namespace :api do
    namespace :v1 do
        resources :exercises
        resources :workouts
        resources :workout_exercises
      end
    end
end