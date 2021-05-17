class WorkoutsController < ApplicationController


  def index
    @workouts = Workout.order(:name)
  end

  def show
    @workout = Workout.find(params[:id])
  end

end
