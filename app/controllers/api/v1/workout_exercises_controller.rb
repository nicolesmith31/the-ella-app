class Api::V1::WorkoutExercisesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session
  def index
  end

  def create
    exercise = Exercise.find_by(exercise_id: params[:exerciseId])
    workout = Workout.find_by(id: params[:workoutId])

    new_workoutExercise = WorkoutExercise.new
    

    new_workoutExercise.workout = workout
    new_workoutExercise.exercise = exercise
    if new_workoutExercise.save
      render json: new_workoutExercise
    else
      render json: {"error":"No save completed"}
    end
  end
end
