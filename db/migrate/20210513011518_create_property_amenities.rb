class CreatePropertyAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :property_amenities do |t|
      t.integer :property_id, null: false
      t.integer :amenity_id, null: false

      t.timestamps
    end

    add_index :property_amenities, :property_id
    add_index :property_amenities, :amenity_id
  end
end
