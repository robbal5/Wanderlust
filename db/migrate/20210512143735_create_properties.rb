class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.integer :address_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description
      t.integer :number_of_guests
      t.integer :number_of_bedrooms
      t.integer :number_of_beds 
      t.integer :number_of_bathrooms
      t.string :type_of_place, null: false
      t.boolean :enhanced_clean, default: false
      t.boolean :self_check_in, default: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :properties, :address_id
    add_index :properties, :user_id
    
  end
end
