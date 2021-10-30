class AddTagColumToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :tag, :integer, null: false

    remove_index :users, :username
    add_index :users, [:username, :tag], unique: true
  end
end
