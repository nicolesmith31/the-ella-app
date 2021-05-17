class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :exercise_id
      t.timestamps null: false
    end
  end
end
