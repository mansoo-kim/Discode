class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.text :body, null: false
      t.integer :messageable_id, null: false
      t.string :messageable_type, null: false

      t.timestamps
    end

    add_index :messages, [:messageable_type, :messageable_id, :sender_id], name: 'index_messageable_type_id_sender'
    add_index :messages, [:sender_id]
  end
end
