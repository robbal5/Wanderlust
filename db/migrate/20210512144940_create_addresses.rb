class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.integer :state_id, null: false
      t.integer :city_id, null: false
      t.string :street_address, null: false
      t.integer :zip_code, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :addresses, :state_id
    add_index :addresses, :city_id
  end
end
