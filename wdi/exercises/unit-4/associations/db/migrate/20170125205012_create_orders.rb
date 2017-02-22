class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :customer_id
      t.string :integer
      t.float :value

      t.timestamps
    end
  end
end
