class RemoveStateFromAddress < ActiveRecord::Migration[5.2]
  def change
    remove_column :addresses, :state_id
  end
end
