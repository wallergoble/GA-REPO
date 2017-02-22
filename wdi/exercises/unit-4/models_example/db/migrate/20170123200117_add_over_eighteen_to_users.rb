class AddOverEighteenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :over_eighteen, :boolean
  end
end
