class AddIndexToUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, [:tag, :username], unique: true
  end
end
