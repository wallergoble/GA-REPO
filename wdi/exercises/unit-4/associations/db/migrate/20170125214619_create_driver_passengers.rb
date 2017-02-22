class CreateDriverPassengers < ActiveRecord::Migration[5.0]
  def change
    create_table :driver_passengers do |t|
      t.references :driver, foreign_key: true
      t.references :passenger, foreign_key: true

      t.timestamps
    end
  end
end
