class UpdateIndexOnMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_index :memberships, [:joinable_type, :joinable_id]
    add_index :memberships, [:joinable_type, :joinable_id, :user_id]
  end
end
