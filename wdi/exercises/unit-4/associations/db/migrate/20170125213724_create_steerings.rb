class CreateSteerings < ActiveRecord::Migration[5.0]
  def change
    create_table :steerings do |t|
      t.references :car, foreign_key: true
      t.boolean :auto

      t.timestamps
    end
  end
end
