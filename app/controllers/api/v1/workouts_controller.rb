class Api::V1::WorkoutsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session
  def index
  end

  def create

  puts 'out'
    new_workout = Workout.new
    new_workout.name = (params[:name])
    if new_workout.save
      render json: new_workout
    else
      render json: {"error":"No save completed"}
    end
  end

  def show
    workout = Workout.find(params[:id])
    exercises = workout.exercises
    exercise_ids = []
    exercises.each do |exe|
      exercise_ids << [exe.exercise_id, exe.name]
    end

    puts exercises
    render json: {"exercises":exercise_ids}
  end
end
