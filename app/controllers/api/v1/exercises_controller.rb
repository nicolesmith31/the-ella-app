class Api::V1::ExercisesController < ApplicationController
  skip_before_action :verify_authenticity_token
protect_from_forgery with: :null_session
  def index
  end

  def create

puts 'out'
puts !Exercise.exists?(exercise_id: params[:exercise_id])
     if !Exercise.exists?(exercise_id: params[:exercise_id])
      puts 'in'
      new_exercise = Exercise.new
      new_exercise.exercise_id = (params[:exercise_id])
      new_exercise.name = (params[:name])
      if new_exercise.save
        render json: new_exercise
      else
        render json: {"error":"No save completed"}
      end
    else
      render json: {"exer":"already Exists"}
     end
  end
end
