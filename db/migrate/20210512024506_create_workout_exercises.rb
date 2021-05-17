class CreateWorkoutExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_exercises do |t|
      t.belongs_to :workout
      t.belongs_to :exercise
      t.timestamps
    end
  end
end

