class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :name, null: false
      t.integer :phone_number
      t.date :date_of_birth
      t.integer :address_id

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
    add_index :users, :name
    add_index :users, :address_id
  end

  
end
