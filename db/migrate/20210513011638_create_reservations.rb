class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :property_id, null: false
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end

    add_index :reservations, :property_id
    add_index :reservations, :user_id
  end
end
