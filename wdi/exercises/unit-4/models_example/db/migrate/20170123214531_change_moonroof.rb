class ChangeMoonroof < ActiveRecord::Migration[5.0]
  def change
    rename_column :cars, :moonroof, :sunroof
  end
end
