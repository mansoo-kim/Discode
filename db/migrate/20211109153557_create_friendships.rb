class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.integer :status, null: false

      t.timestamps
    end

    add_index :friendships, [:user_id, :friend_id], unique: true
    add_index :friendships, [:user_id, :status]
  end
end
