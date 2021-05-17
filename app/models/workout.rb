class Workout < ApplicationRecord
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises

  # belongs_to :user
end