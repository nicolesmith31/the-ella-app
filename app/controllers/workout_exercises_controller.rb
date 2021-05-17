class WorkoutExercisesController < ApplicationController
  def createWorkoutExercises
    @WorkoutExercise = WorkoutExercise.create(name: params[:name])
    render json: @WorkoutExercise
  end
end
